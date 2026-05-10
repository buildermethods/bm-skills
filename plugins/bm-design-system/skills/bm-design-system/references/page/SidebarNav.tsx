import * as React from "react";

export interface NavGroup {
  label: string;
  items: { id: string; label: string }[];
}

const NAV: NavGroup[] = [
  {
    label: "Branding",
    items: [
      { id: "colors", label: "Colors" },
      { id: "typography", label: "Typography" },
    ],
  },
  {
    label: "Structure",
    items: [
      { id: "shells", label: "Shells" },
      { id: "main-navigation", label: "Main navigation" },
      { id: "sub-navigation", label: "Sub navigation" },
      { id: "page-headers", label: "Page headers" },
      { id: "body-content", label: "Body content" },
      { id: "footers", label: "Footers" },
    ],
  },
  {
    label: "Elements",
    items: [
      { id: "iconography", label: "Iconography" },
      { id: "buttons", label: "Buttons" },
      { id: "forms", label: "Forms" },
      { id: "badges", label: "Badges" },
      { id: "toggle-buttons", label: "Toggle buttons" },
      { id: "listings", label: "Listings" },
      { id: "modal", label: "Modal" },
      { id: "dropdown-menu", label: "Dropdown menu" },
      { id: "callout", label: "Callout" },
    ],
  },
  {
    label: "Base styles",
    items: [
      { id: "heading-scale", label: "Heading scale" },
      { id: "h1", label: "H1" },
      { id: "h2", label: "H2" },
      { id: "h3", label: "H3" },
      { id: "h4", label: "H4" },
      { id: "h5", label: "H5" },
      { id: "h6", label: "H6" },
      { id: "anchor", label: "Anchor (a)" },
      { id: "paragraph", label: "Paragraph (p)" },
      { id: "strong", label: "Strong" },
      { id: "lists", label: "Lists (ul / ol)" },
      { id: "list-item", label: "List item (li)" },
      { id: "blockquote", label: "Blockquote" },
      { id: "label", label: "Label / legend" },
      { id: "hr", label: "Horizontal rule" },
    ],
  },
];

interface SidebarNavProps {
  onNavigate?: () => void;
}

export function SidebarNav({ onNavigate }: SidebarNavProps) {
  const [activeId, setActiveId] = React.useState<string>("");

  React.useEffect(() => {
    const ids = NAV.flatMap((g) => g.items.map((i) => i.id));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="flex flex-col gap-6 text-sm">
      {NAV.map((group) => (
        <div key={group.label}>
          <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-ink-muted">
            {group.label}
          </div>
          <ul className="flex flex-col gap-0.5">
            {group.items.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={onNavigate}
                    className={[
                      "block rounded-md px-2 py-1.5 no-underline transition-colors",
                      isActive
                        ? "bg-accent-faded text-accent-display"
                        : "text-ink-body hover:bg-surface hover:text-ink-display",
                    ].join(" ")}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
