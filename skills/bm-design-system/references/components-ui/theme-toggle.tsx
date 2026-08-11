// bm-design-system: theme-toggle primitive
import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/utils";

interface ThemeOption {
  value: Theme;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}

const OPTIONS: ThemeOption[] = [
  { value: "light", label: "Light mode", Icon: Sun },
  { value: "dark", label: "Dark mode", Icon: Moon },
  { value: "system", label: "System theme", Icon: Monitor },
];

export interface ThemeToggleProps {
  block?: boolean;
  className?: string;
}

export function ThemeToggle({ block = false, className }: ThemeToggleProps) {
  const [theme, setTheme] = useTheme();

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border border-hairline bg-surface p-0.5",
        block && "w-full",
        className,
      )}
    >
      {OPTIONS.map(({ value, label, Icon }) => {
        const isActive = theme === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={isActive}
            aria-label={label}
            title={label}
            onClick={() => setTheme(value)}
            className={cn(
              "inline-flex h-7 cursor-pointer items-center justify-center rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
              block ? "flex-1" : "w-7",
              isActive
                ? "bg-page text-ink-display"
                : "text-ink-muted hover:text-ink-display",
            )}
          >
            <Icon className="h-4 w-4" />
          </button>
        );
      })}
    </div>
  );
}
