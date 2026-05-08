import { SectionShell } from "@/components/design-system/SectionShell";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const code = `import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

<Dialog>
  <DialogTrigger asChild>
    <Button>Open dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Are you sure?</DialogTitle>
      <DialogDescription>This action cannot be undone.</DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="ghost">Cancel</Button>
      <Button variant="danger">Delete</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`;

export function ModalSection() {
  return (
    <SectionShell
      id="modal"
      title="Modal"
      description={
        <>
          Built on Radix Dialog. Three sizes (<code>sm</code>,{" "}
          <code>md</code>, <code>lg</code>). Always uses an overlay and a
          close button. Focus is trapped while open.
        </>
      }
      whenToUse={
        <ul>
          <li>Confirmation prompts (delete, discard, etc.).</li>
          <li>Focused tasks that block the underlying view.</li>
        </ul>
      }
      whenNotToUse={
        <ul>
          <li>Casual notifications — use a toast.</li>
          <li>Long, scroll-heavy forms — use a dedicated page.</li>
          <li>Stacked over another modal — flatten the flow instead.</li>
        </ul>
      }
      preview={
        <div className="flex flex-wrap items-center gap-3">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete project?</DialogTitle>
                <DialogDescription>
                  This permanently removes the project and all of its data.
                  This action cannot be undone.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button variant="ghost">Cancel</Button>
                <Button variant="danger">Delete</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary">Open large</Button>
            </DialogTrigger>
            <DialogContent size="lg">
              <DialogHeader>
                <DialogTitle>Larger dialog</DialogTitle>
                <DialogDescription>
                  Use the <code>size="lg"</code> variant when you need more
                  horizontal room for content.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button>Got it</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      }
      code={code}
      options={
        <ul className="list-disc pl-5">
          <li><code>size</code> on <code>&lt;DialogContent&gt;</code>: <code>sm</code> | <code>md</code> (default) | <code>lg</code></li>
          <li>Always include <code>&lt;DialogTitle&gt;</code> — required for screen readers.</li>
          <li>Use <code>&lt;DialogDescription&gt;</code> for the supporting copy line.</li>
          <li>Buttons live inside <code>&lt;DialogFooter&gt;</code>; right-aligned on desktop, stacked on mobile.</li>
        </ul>
      }
    />
  );
}
