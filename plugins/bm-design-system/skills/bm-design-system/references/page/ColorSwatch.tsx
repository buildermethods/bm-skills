import * as React from "react";

interface ColorSwatchProps {
  name: string;
  utility: string;
  hexLight: string;
  hexDark: string;
}

export function ColorSwatch({
  name,
  utility,
  hexLight,
  hexDark,
}: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-2 overflow-hidden rounded-md border border-hairline">
        <div
          className="aspect-square"
          style={{ backgroundColor: hexLight }}
          aria-label={`${name} light`}
        />
        <div
          className="aspect-square"
          style={{ backgroundColor: hexDark }}
          aria-label={`${name} dark`}
        />
      </div>
      <div className="text-xs">
        <div className="font-medium text-ink-display">{name}</div>
        <div className="font-mono text-ink-muted">{utility}</div>
        <div className="mt-1 flex justify-between font-mono text-[10px] text-ink-muted">
          <span>{hexLight}</span>
          <span>{hexDark}</span>
        </div>
      </div>
    </div>
  );
}
