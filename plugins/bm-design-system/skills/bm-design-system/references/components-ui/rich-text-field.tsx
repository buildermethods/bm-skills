"use client";
import * as React from "react";
import { Crepe } from "@milkdown/crepe";
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
        featureConfigs: placeholder
          ? { [Crepe.Feature.Placeholder]: { text: placeholder } }
          : undefined,
      });

      crepe.setReadonly(readOnly);

      crepe.create().then(() => {
        crepe.on((listener) => {
          listener.markdownUpdated((_, markdown) => {
            onChangeRef.current?.(markdown);
          });
        });
      });

      return () => {
        crepe.destroy();
      };
    }, [defaultValue, placeholder, readOnly]);

    return (
      <div
        ref={localRef}
        className={cn(
          "rounded-md border border-hairline bg-page text-ink-body shadow-sm",
          "min-h-[10rem] p-3",
          "focus-within:outline-none focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:ring-offset-page focus-within:border-accent",
          className,
        )}
      />
    );
  },
);
RichTextField.displayName = "RichTextField";

export { RichTextField };
