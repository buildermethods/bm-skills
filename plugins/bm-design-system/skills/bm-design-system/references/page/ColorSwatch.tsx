import * as React from "react";
import { Check, Copy } from "lucide-react";

interface ColorSwatchProps {
  name: string;
  utility: string;
  hexLight: string;
  hexDark: string;
}

function useIsDark(): boolean {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const observer = new MutationObserver(update);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return isDark;
}

interface CopyableHexProps {
  label: string;
  hex: string;
  isActive: boolean;
}

function CopyableHex({ label, hex, isActive }: CopyableHexProps) {
  const [copied, setCopied] = React.useState(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(hex);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      // ignore
    }
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Copy ${label} mode hex ${hex}`}
      className={[
        "group flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-1.5 py-1 font-mono text-[10px] transition-colors",
        "hover:bg-surface",
        isActive ? "text-ink-display" : "text-ink-muted",
      ].join(" ")}
    >
      <span className="text-ink-muted">{label}</span>
      <span className="flex items-center gap-1.5">
        <span>{hex}</span>
        {copied ? (
          <Check className="h-3 w-3 text-accent" aria-hidden />
        ) : (
          <Copy
            className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100"
            aria-hidden
          />
        )}
      </span>
    </button>
  );
}

export function ColorSwatch({
  name,
  utility,
  hexLight,
  hexDark,
}: ColorSwatchProps) {
  const isDark = useIsDark();
  const currentHex = isDark ? hexDark : hexLight;

  return (
    <div className="flex flex-col gap-2">
      <div
        className="aspect-[2/1] rounded-md border border-hairline"
        style={{ backgroundColor: currentHex }}
        aria-label={`${name} (${isDark ? "dark" : "light"} mode preview)`}
      />
      <div className="text-xs">
        <div className="font-medium text-ink-display">{name}</div>
        <div className="font-mono text-ink-muted">{utility}</div>
        <div className="mt-1 flex flex-col gap-0.5">
          <CopyableHex label="Light" hex={hexLight} isActive={!isDark} />
          <CopyableHex label="Dark" hex={hexDark} isActive={isDark} />
        </div>
      </div>
    </div>
  );
}
