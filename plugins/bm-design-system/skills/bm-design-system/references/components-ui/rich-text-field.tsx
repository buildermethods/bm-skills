// bm-design-system: rich-text-field primitive
import * as React from "react";
import { Crepe } from "@milkdown/crepe";
import type { Ctx } from "@milkdown/kit/ctx";
import { commandsCtx, editorViewCtx } from "@milkdown/kit/core";
import {
  bulletListSchema,
  liftListItemCommand,
  linkSchema,
  listItemSchema,
  orderedListSchema,
  sinkListItemCommand,
  wrapInBlockTypeCommand,
} from "@milkdown/kit/preset/commonmark";
import { toggleLinkCommand } from "@milkdown/kit/component/link-tooltip";
import "@milkdown/crepe/theme/common/style.css";
import "@milkdown/crepe/theme/frame.css";
import { cn } from "@/lib/utils";

export interface RichTextFieldProps {
  defaultValue?: string;
  onChange?: (markdown: string) => void;
  placeholder?: string;
  readOnly?: boolean;
  className?: string;
}

const bulletListIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"/>
    <line x1="8" y1="12" x2="21" y2="12"/>
    <line x1="8" y1="18" x2="21" y2="18"/>
    <circle cx="3.5" cy="6" r="1.25" fill="currentColor"/>
    <circle cx="3.5" cy="12" r="1.25" fill="currentColor"/>
    <circle cx="3.5" cy="18" r="1.25" fill="currentColor"/>
  </svg>
`;

const orderedListIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="10" y1="6" x2="21" y2="6"/>
    <line x1="10" y1="12" x2="21" y2="12"/>
    <line x1="10" y1="18" x2="21" y2="18"/>
    <text x="2" y="9" font-family="ui-sans-serif, system-ui, sans-serif" font-size="7" font-weight="600" fill="currentColor" stroke="none">1.</text>
    <text x="2" y="15" font-family="ui-sans-serif, system-ui, sans-serif" font-size="7" font-weight="600" fill="currentColor" stroke="none">2.</text>
    <text x="2" y="21" font-family="ui-sans-serif, system-ui, sans-serif" font-size="7" font-weight="600" fill="currentColor" stroke="none">3.</text>
  </svg>
`;

const taskListIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="6" height="6" rx="1"/>
    <path d="M4.5 7l1.2 1.2L7.8 6"/>
    <rect x="3" y="14" width="6" height="6" rx="1"/>
    <line x1="12" y1="7" x2="21" y2="7"/>
    <line x1="12" y1="17" x2="21" y2="17"/>
  </svg>
`;

const outdentIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="11" y1="12" x2="21" y2="12"/>
    <line x1="11" y1="18" x2="21" y2="18"/>
    <polyline points="7,8 3,12 7,16"/>
  </svg>
`;

const indentIcon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="11" y1="12" x2="21" y2="12"/>
    <line x1="11" y1="18" x2="21" y2="18"/>
    <polyline points="3,8 7,12 3,16"/>
  </svg>
`;

type ListMode = "bullet" | "ordered" | "task";

function detectCurrentList(
  ctx: Ctx,
): { mode: ListMode; depth: number } | null {
  const view = ctx.get(editorViewCtx);
  const { $from } = view.state.selection;
  const bullet = bulletListSchema.type(ctx);
  const ordered = orderedListSchema.type(ctx);
  for (let depth = $from.depth; depth > 0; depth--) {
    const node = $from.node(depth);
    if (node.type === ordered) return { mode: "ordered", depth };
    if (node.type === bullet) {
      const firstItem = node.firstChild;
      const isTask = firstItem?.attrs?.checked != null;
      return { mode: isTask ? "task" : "bullet", depth };
    }
  }
  return null;
}

function toggleListMode(ctx: Ctx, target: ListMode) {
  const view = ctx.get(editorViewCtx);
  const commands = ctx.get(commandsCtx);
  const current = detectCurrentList(ctx);

  // Not currently in a list — wrap fresh.
  if (!current) {
    if (target === "task") {
      commands.call(wrapInBlockTypeCommand.key, {
        nodeType: listItemSchema.type(ctx),
        attrs: { checked: false },
      });
    } else {
      const nodeType =
        target === "ordered"
          ? orderedListSchema.type(ctx)
          : bulletListSchema.type(ctx);
      commands.call(wrapInBlockTypeCommand.key, { nodeType });
    }
    return;
  }

  // Same list mode — lift everything out.
  if (current.mode === target) {
    // liftListItemCommand returns true while it can keep lifting; loop until done.
    // Hard cap to avoid any pathological infinite loop.
    for (let i = 0; i < 16; i++) {
      if (!commands.call(liftListItemCommand.key)) break;
    }
    return;
  }

  // Different list mode — switch list type and/or list_item checked attrs in
  // one transaction.
  const targetListType =
    target === "ordered"
      ? orderedListSchema.type(ctx)
      : bulletListSchema.type(ctx);
  const { state } = view;
  const listPos = state.selection.$from.before(current.depth);
  const listNode = state.doc.nodeAt(listPos);
  if (!listNode) return;

  let tr = state.tr;
  if (listNode.type !== targetListType) {
    // Pass clean attrs: bullet_list only accepts {spread}, ordered_list accepts
    // {spread, order}. Carrying the old `order` attr across to bullet_list
    // would be rejected and the type swap would silently no-op.
    const spread = listNode.attrs.spread ?? false;
    const newAttrs =
      target === "ordered" ? { spread, order: 1 } : { spread };
    tr = tr.setNodeMarkup(listPos, targetListType, newAttrs);
  }
  // Reset each list_item's Crepe-managed attrs to match the new list type.
  // The commonmark preset's syncListOrderPlugin watches list_item.listType and
  // forces the parent list type to follow it — so leaving the old `listType`
  // (e.g. "ordered" inherited from the previous OL) causes our setNodeMarkup
  // above to be undone on the next tick. setNodeMarkup preserves content size,
  // so child positions remain valid through the loop.
  listNode.forEach((item, offset) => {
    const itemPos = listPos + 1 + offset;
    const newAttrs = {
      ...item.attrs,
      listType: target === "ordered" ? "ordered" : "bullet",
      // `checked: null` for bullet hides the checkbox; explicit boolean for task.
      checked: target === "task" ? (item.attrs.checked ?? false) : null,
    };
    tr = tr.setNodeMarkup(itemPos, undefined, newAttrs);
  });
  if (tr.docChanged) view.dispatch(tr);
}

const RichTextField = React.forwardRef<HTMLDivElement, RichTextFieldProps>(
  (
    { defaultValue = "", onChange, placeholder, readOnly = false, className },
    ref,
  ) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    React.useImperativeHandle(ref, () => localRef.current as HTMLDivElement);

    const onChangeRef = React.useRef(onChange);
    React.useEffect(() => {
      onChangeRef.current = onChange;
    }, [onChange]);

    React.useEffect(() => {
      const root = localRef.current;
      if (!root) return;

      const crepe = new Crepe({
        root,
        defaultValue,
        features: {
          [Crepe.Feature.BlockEdit]: false,
          [Crepe.Feature.Latex]: false,
        },
        featureConfigs: {
          [Crepe.Feature.Placeholder]: { text: placeholder ?? "..." },
          [Crepe.Feature.Toolbar]: {
            buildToolbar: (builder) => {
              const list = builder.addGroup("list", "List");
              list.addItem("bullet-list", {
                icon: bulletListIcon,
                active: (ctx) => detectCurrentList(ctx)?.mode === "bullet",
                onRun: (ctx) => toggleListMode(ctx, "bullet"),
              });
              list.addItem("ordered-list", {
                icon: orderedListIcon,
                active: (ctx) => detectCurrentList(ctx)?.mode === "ordered",
                onRun: (ctx) => toggleListMode(ctx, "ordered"),
              });
              list.addItem("task-list", {
                icon: taskListIcon,
                active: (ctx) => detectCurrentList(ctx)?.mode === "task",
                onRun: (ctx) => toggleListMode(ctx, "task"),
              });

              const indent = builder.addGroup("indent", "Indent");
              indent.addItem("outdent", {
                icon: outdentIcon,
                active: () => false,
                onRun: (ctx) => {
                  const commands = ctx.get(commandsCtx);
                  commands.call(liftListItemCommand.key);
                },
              });
              indent.addItem("indent", {
                icon: indentIcon,
                active: () => false,
                onRun: (ctx) => {
                  const commands = ctx.get(commandsCtx);
                  commands.call(sinkListItemCommand.key);
                },
              });
            },
          },
        },
      });

      // Make the link mark non-inclusive so typing immediately after a link
      // (e.g. after pasting a URL and pressing space) doesn't extend the link.
      crepe.editor.config((ctx) => {
        const original = ctx.get(linkSchema.key);
        ctx.set(linkSchema.key, (innerCtx) => ({
          ...original(innerCtx),
          inclusive: false,
        }));
      });

      crepe.setReadonly(readOnly);

      const onKeyDown = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && (e.key === "k" || e.key === "K")) {
          e.preventDefault();
          crepe.editor.action((ctx) => {
            ctx.get(commandsCtx).call(toggleLinkCommand.key);
          });
        }
      };
      root.addEventListener("keydown", onKeyDown);

      crepe.create().then(() => {
        crepe.on((listener) => {
          listener.markdownUpdated((_, markdown) => {
            onChangeRef.current?.(markdown);
          });
        });
      });

      return () => {
        root.removeEventListener("keydown", onKeyDown);
        crepe.destroy();
      };
    }, [defaultValue, placeholder, readOnly]);

    return (
      <div
        ref={localRef}
        className={cn(
          "bm-rich-text rounded-md border border-hairline bg-page text-ink-body",
          "focus-within:outline-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-page focus-within:border-accent focus-within:bg-accent-faded/50",
          className,
        )}
      />
    );
  },
);
RichTextField.displayName = "RichTextField";

export { RichTextField };
