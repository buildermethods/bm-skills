export interface PaletteEntry {
  name: string;
  utility: string;
  hexLight: string;
  hexDark: string;
}

export const SURFACES: PaletteEntry[] = [
  {
    name: "page",
    utility: "bg-page",
    hexLight: "__COLOR_PAGE_LIGHT__",
    hexDark: "__COLOR_PAGE_DARK__",
  },
  {
    name: "surface",
    utility: "bg-surface",
    hexLight: "__COLOR_SURFACE_LIGHT__",
    hexDark: "__COLOR_SURFACE_DARK__",
  },
  {
    name: "hairline",
    utility: "border-hairline",
    hexLight: "__COLOR_HAIRLINE_LIGHT__",
    hexDark: "__COLOR_HAIRLINE_DARK__",
  },
];

export const TEXT: PaletteEntry[] = [
  {
    name: "ink-body",
    utility: "text-ink-body",
    hexLight: "__COLOR_INK_BODY_LIGHT__",
    hexDark: "__COLOR_INK_BODY_DARK__",
  },
  {
    name: "ink-display",
    utility: "text-ink-display",
    hexLight: "__COLOR_INK_DISPLAY_LIGHT__",
    hexDark: "__COLOR_INK_DISPLAY_DARK__",
  },
  {
    name: "ink-muted",
    utility: "text-ink-muted",
    hexLight: "__COLOR_INK_MUTED_LIGHT__",
    hexDark: "__COLOR_INK_MUTED_DARK__",
  },
];

export const SPLASH: PaletteEntry[] = [
  {
    name: "accent",
    utility: "bg-accent / text-accent",
    hexLight: "__COLOR_ACCENT_LIGHT__",
    hexDark: "__COLOR_ACCENT_DARK__",
  },
  {
    name: "accent-faded",
    utility: "bg-accent-faded",
    hexLight: "__COLOR_ACCENT_FADED_LIGHT__",
    hexDark: "__COLOR_ACCENT_FADED_DARK__",
  },
  {
    name: "accent-darker",
    utility: "bg-accent-darker / text-accent-darker",
    hexLight: "__COLOR_ACCENT_DARKER_LIGHT__",
    hexDark: "__COLOR_ACCENT_DARKER_DARK__",
  },
  {
    name: "signal",
    utility: "bg-signal / text-signal",
    hexLight: "__COLOR_SIGNAL_LIGHT__",
    hexDark: "__COLOR_SIGNAL_DARK__",
  },
  {
    name: "signal-faded",
    utility: "bg-signal-faded",
    hexLight: "__COLOR_SIGNAL_FADED_LIGHT__",
    hexDark: "__COLOR_SIGNAL_FADED_DARK__",
  },
  {
    name: "signal-darker",
    utility: "bg-signal-darker / text-signal-darker",
    hexLight: "__COLOR_SIGNAL_DARKER_LIGHT__",
    hexDark: "__COLOR_SIGNAL_DARKER_DARK__",
  },
];

export const FONTS = {
  display: "__HEADLINE_FONT__",
  body: "__BODY_FONT__",
};
