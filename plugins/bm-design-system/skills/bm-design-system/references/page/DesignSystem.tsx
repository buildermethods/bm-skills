import * as React from "react";
import { Menu, X } from "lucide-react";
import { SidebarNav } from "@/components/design-system/SidebarNav";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { ColorsSection } from "@/components/design-system/sections/branding/ColorsSection";
import { TypographySection } from "@/components/design-system/sections/branding/TypographySection";
import { ShellsSection } from "@/components/design-system/sections/structure/ShellsSection";
import { MainNavSection } from "@/components/design-system/sections/structure/MainNavSection";
import { SubNavSection } from "@/components/design-system/sections/structure/SubNavSection";
import { PageHeadersSection } from "@/components/design-system/sections/structure/PageHeadersSection";
import { BodyContentSection } from "@/components/design-system/sections/structure/BodyContentSection";
import { FootersSection } from "@/components/design-system/sections/structure/FootersSection";
import { BaseStylesSection } from "@/components/design-system/sections/base-styles/BaseStylesSection";
import { IconographySection } from "@/components/design-system/sections/elements/IconographySection";
import { ButtonsSection } from "@/components/design-system/sections/elements/ButtonsSection";
import { ButtonDropdownSection } from "@/components/design-system/sections/elements/ButtonDropdownSection";
import { FormsSection } from "@/components/design-system/sections/elements/FormsSection";
import { BadgesSection } from "@/components/design-system/sections/elements/BadgesSection";
import { ToggleButtonsSection } from "@/components/design-system/sections/elements/ToggleButtonsSection";
import { ListingsSection } from "@/components/design-system/sections/elements/ListingsSection";
import { DataTableSection } from "@/components/design-system/sections/elements/DataTableSection";
import { ModalSection } from "@/components/design-system/sections/elements/ModalSection";
import { CalloutSection } from "@/components/design-system/sections/elements/CalloutSection";
import { DropdownMenuSection } from "@/components/design-system/sections/elements/DropdownMenuSection";

export function DesignSystem() {
  const [navOpen, setNavOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-page text-ink-body">
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between border-b border-hairline bg-page/80 px-4 backdrop-blur-sm sm:px-6">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setNavOpen(true)}
            className="inline-flex h-9 w-9 cursor-pointer items-center justify-center rounded-md border border-hairline bg-surface text-ink-body lg:hidden"
            aria-label="Open navigation"
          >
            <Menu className="h-4 w-4" />
          </button>
          <span className="font-display text-sm font-semibold text-ink-display">
            Design System
          </span>
        </div>
        <ThemeToggle />
      </header>

      <div className="mx-auto flex max-w-7xl">
        <aside className="hidden w-64 shrink-0 border-r border-hairline lg:block">
          <div className="sticky top-14 max-h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
            <SidebarNav />
          </div>
        </aside>

        {navOpen && (
          <div className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-ink-display/40 backdrop-blur-sm"
              onClick={() => setNavOpen(false)}
            />
            <div className="absolute left-0 top-0 h-full w-72 overflow-y-auto bg-page p-4 shadow-xl">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-display text-sm font-semibold text-ink-display">
                  Design System
                </span>
                <button
                  type="button"
                  onClick={() => setNavOpen(false)}
                  className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-ink-muted hover:text-ink-display"
                  aria-label="Close navigation"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <SidebarNav onNavigate={() => setNavOpen(false)} />
            </div>
          </div>
        )}

        <main className="min-w-0 flex-1 px-4 py-8 sm:px-8 lg:px-12">
          <div className="mb-12 max-w-2xl">
            <h1 className="text-3xl font-semibold text-ink-display">
              Design System
            </h1>
            <p className="mt-2 text-ink-muted">
              Single source of truth for every visual primitive in this app.
              Reuse what's here. Propose additions before building one-offs.
            </p>
          </div>

          <ColorsSection />
          <TypographySection />
          <ShellsSection />
          <MainNavSection />
          <SubNavSection />
          <PageHeadersSection />
          <BodyContentSection />
          <FootersSection />
          <IconographySection />
          <ButtonsSection />
          <ButtonDropdownSection />
          <FormsSection />
          <BadgesSection />
          <ToggleButtonsSection />
          <ListingsSection />
          <DataTableSection />
          <ModalSection />
          <DropdownMenuSection />
          <CalloutSection />
          <BaseStylesSection />
        </main>
      </div>
    </div>
  );
}

export default DesignSystem;
