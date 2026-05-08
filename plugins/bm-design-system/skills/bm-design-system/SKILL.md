---
name: bm-design-system
description: Guides you through creating and implementing a design system for your application.
---

# Design System Builder

You are guiding a builder through scaffolding a complete design system into a React + Tailwind v4 codebase. The output is a single-page reference at `/admin/design-system` that previews and documents every primitive, plus a small set of reusable shadcn-style components, plus instructions appended to `AGENTS.md` (or `CLAUDE.md`) so future agents always defer to the design system instead of drifting.

## Audience assumption

The user understands what they want their app to look and feel like. They are NOT expected to hand-pick every CSS variable or know shadcn/ui internals. Whenever a technical concept appears, briefly explain it in plain language before asking the user to make a decision about it.

## Core interaction principles

1. **Always propose a default with reasoning, then ask to confirm or change.** Never ask open-ended "what do you want?" questions when you can propose a sensible default and explain why. The user is much better at editing a proposal than generating one.

2. **Use the AskUserQuestion tool for decisions with discrete options.** For free-form input (a custom hex code, a custom font name) use a normal chat message. For curated picklists, always use AskUserQuestion — the user is much more likely to be on mobile, and tappable options beat typing.

3. **One decision at a time, in sequence.** Walk through phases in order. Lock each phase before moving to the next.

4. **Keep your prose tight.** Short framings, no preamble. The user is making decisions, not reading essays.

5. **The design system is opinionated, not exhaustive.** Ship a small, useful, beautiful set of primitives with sensible defaults. The user can extend by re-running the skill later.

## Hard assumptions

- The target codebase uses **React**.
- The target codebase uses **Tailwind CSS v4 or later**. (v4 uses `@theme` directive in CSS instead of `tailwind.config.js`.)
- If either assumption is violated, stop and tell the user what's missing.

## Phase 0 — Detect target codebase state

Before talking to the user, inspect the codebase silently and form a picture.

**Framework detection** (in order — first match wins):

1. **Vite** — `vite.config.ts` / `vite.config.js` / `vite.config.mts` exists at repo root.
2. **Next.js (app router)** — `next.config.*` exists AND `app/` directory exists.
3. **Next.js (pages router)** — `next.config.*` exists AND `pages/` directory exists, no `app/`.
4. **Rails + Inertia** — `Gemfile` contains `inertia-rails` (or `inertia_rails`) AND `app/frontend/` or `app/javascript/pages/` exists.
5. **Rails + react-on-rails** — `Gemfile` contains `react_on_rails`.
6. **Unknown** — none of the above. Continue but tell the user the route registration step will be a manual snippet they paste.

**Tailwind v4 check:**

- Look for `@import "tailwindcss"` in any CSS file under common entry paths (`src/`, `app/`, `app/javascript/`, `app/frontend/`).
- Or `@tailwindcss/vite`, `@tailwindcss/postcss`, or `tailwindcss@^4` in `package.json`.
- If none found, or if you find Tailwind v3 markers (`tailwind.config.js`, `@tailwind base;`), **stop**: print "This skill requires Tailwind CSS v4 or later. Please upgrade first — see https://tailwindcss.com/docs/upgrade-guide — and re-run." and exit.

**Existing-system detection (sets first-run vs re-run mode):**

- Does the route already exist? Look for files matching the framework's convention for `/admin/design-system`.
- Does `src/components/ui/` (or framework-equivalent) already exist?
- Does the project's main CSS file already have a `@theme` block?
- Does the project have a `bm-design-system:start` marker in `AGENTS.md` or `CLAUDE.md`?

If any of those are true → **re-run mode**. Otherwise → **first-run mode**.

**Agent instruction file:**

- Check for `AGENTS.md` at repo root.
- Check for `CLAUDE.md` at repo root.
- Note which exists (or neither).

State a brief summary of what you found before moving on. Example:
> Detected: Vite + React + Tailwind v4. No existing design system. `CLAUDE.md` present, `AGENTS.md` absent. I'll scaffold from scratch.

## Phase 1 — Confirm route

Default route: **`/admin/design-system`**.

Use AskUserQuestion:

- Question: "Where should the design system reference page live?"
- Options: `Use /admin/design-system (recommended)`, `Use /design-system (no admin prefix)`, `Use /styleguide`

If the user picks Other and provides a custom path, accept it (must start with `/`).

Save the chosen route as `routePath` for downstream phases.

## Phase 2 — Color palette

Explain in one short paragraph: "We define ten color tokens. You pick three — accent, signal, and a base neutral — and I derive the rest with sensible defaults for both light and dark mode. You'll see the full palette before we lock it."

### 2a. Accent

Use AskUserQuestion. Pull options + hex previews from `references/palette-presets.json` (`accent` array). Show the swatch name; the user picks. If they pick custom, ask for a hex via free-form chat.

### 2b. Signal

Same pattern, `signal` array.

### 2c. Base neutral

Same pattern, `neutral` array (slate / zinc / stone / gray / neutral — Tailwind's built-in neutral families, used to derive `page` / `surface` / `hairline` / `ink-*`).

### 2d. Derive + confirm

Apply the derivation rules in `references/derive-palette.md` to produce the full token table:

| Token         | Light                       | Dark                          |
|---------------|-----------------------------|-------------------------------|
| page          | neutral-50                  | neutral-950                   |
| surface       | neutral-100                 | neutral-900                   |
| hairline      | neutral-200                 | neutral-800                   |
| ink-body      | neutral-700                 | neutral-200                   |
| ink-display   | neutral-900                 | neutral-50                    |
| ink-muted     | neutral-500                 | neutral-400                   |
| accent        | <user accent>               | <user accent, slightly lifted>|
| accent-faded  | accent @ 12% on white       | accent @ 18% on neutral-900   |
| signal        | <user signal>               | <user signal, slightly lifted>|
| signal-faded  | signal @ 12% on white       | signal @ 18% on neutral-900   |

Show the user a chat-rendered table of the resolved hex values. Then ask:

- Question: "Lock this palette?"
- Options: `Yes, lock it`, `Tweak one token`, `Start over`

If "Tweak one token", ask which token, then ask for a custom hex (light + dark). Loop until "Yes, lock it".

Save as `palette` for Phase 5.

## Phase 3 — Fonts

Explain: "Two fonts: one for headlines, one for body. Both load from Google Fonts via `@import` in the CSS — no build config needed."

### 3a. Headline font

Use AskUserQuestion with options from `references/font-presets.json` (`headline` array). Custom: ask for a Google Fonts family name verbatim.

### 3b. Body font

Same pattern, `body` array.

Show the chosen pair in a single-line preview. Ask:

- Question: "Lock these fonts?"
- Options: `Yes`, `Pick again`

Save as `fonts` for Phase 5.

## Phase 4 — (re-run only) Scope

Skip this phase on first run.

If re-run mode, after Phase 3 ask:

- Question: "What do you want to update?"
- Options: `Tokens only (colors + fonts)`, `Add new sections to the page`, `Full re-scaffold (overwrites everything inside the bm-design-system markers)`

If "Add new sections", ask which section IDs to add (free-form, comma-separated against the canonical section list below).

If "Full re-scaffold", confirm with a second AskUserQuestion: `Yes, overwrite`, `Cancel`.

## Phase 5 — Write files

This is the "do the work" phase. Don't show drafts; just write the files. The user already approved the inputs.

### 5a. Resolve target paths

Pick the path map for the detected framework. The canonical Vite map is:

| Logical path                           | Vite target                                          |
|----------------------------------------|------------------------------------------------------|
| route page                             | `src/admin/design-system/page.tsx`                   |
| design-system components               | `src/components/design-system/*.tsx`                 |
| ui primitives                          | `src/components/ui/{button,input,label,dialog}.tsx`  |
| utils                                  | `src/lib/utils.ts`                                   |
| design-system stylesheet               | `src/styles/design-system.css`                       |
| entry CSS (where to add the import)    | the file containing `@import "tailwindcss"`          |

Per-framework overrides:

- **Next.js app router** — route page at `app/admin/design-system/page.tsx`; everything else at `components/...`, `lib/...`, `styles/...` (no `src/` prefix unless `src/` exists).
- **Next.js pages router** — route page at `pages/admin/design-system.tsx`.
- **Rails + Inertia** — route page at `app/frontend/pages/admin/design-system.tsx` (or `app/javascript/pages/...` if that's the pattern); update Inertia routes file accordingly.
- **Rails + react-on-rails** — print a manual snippet pointing to the user's existing component registration; do not auto-edit Ruby files.
- **Unknown** — write components into `src/components/...` if `src/` exists, otherwise the project root, and print a manual route registration snippet.

### 5b. Copy the templates

For each template under `references/`, write to its mapped target. Substitute these tokens (string-replace) at write time:

| Token in template                  | Replacement                                                       |
|------------------------------------|-------------------------------------------------------------------|
| `__ROUTE_PATH__`                   | the chosen `routePath`                                            |
| `__HEADLINE_FONT__`                | the headline font family name                                     |
| `__HEADLINE_FONT_URL__`            | the Google Fonts URL fragment for the headline font              |
| `__BODY_FONT__`                    | the body font family name                                         |
| `__BODY_FONT_URL__`                | the Google Fonts URL fragment for the body font                  |
| `__COLOR_<TOKEN>_<MODE>__`         | hex value, e.g. `__COLOR_PAGE_LIGHT__` → `#ffffff`               |

Files to write (sources under `references/`, plus their substitution behavior):

- `page/DesignSystem.tsx` → `components/design-system/DesignSystem.tsx` (Next.js app-router clients also need a `"use client"` directive)
- `page/{SidebarNav,ThemeToggle,SectionShell,CodeBlock,ColorSwatch}.tsx` → `components/design-system/`
- `page/palette.ts` → `components/design-system/palette.ts` — **substitute color + font tokens** here
- `page/sections/**/*.tsx` → `components/design-system/sections/`. Note: all 14 base-styles sub-sections live in a single `BaseStylesSection.tsx` (returns a fragment of 14 anchored `SectionShell`s); the canonical section list maps to anchors, not files.
- `components-ui/{button,input,label,dialog}.tsx` → `components/ui/` (skip a file if it already exists and the existing one already comes from this skill — check for a `bm-design-system` marker comment; otherwise ask the user before overwriting)
- `styles/design-system.css` → target stylesheet path; **substitute color + font tokens** here
- `lib/utils.ts` → `lib/utils.ts` only if missing
- A small route-page entry file at the framework's location (e.g. `src/admin/design-system/page.tsx` for Vite) that imports and renders `DesignSystem`

### 5c. Wire the stylesheet

Append `@import "./design-system.css";` (or correct relative path) to the project's existing entry CSS, immediately after `@import "tailwindcss";`. If the import is already present, skip. Wrap the import in `bm-design-system:start` / `bm-design-system:end` HTML-comment-style CSS block markers so re-runs can be non-destructive:

```css
/* bm-design-system:start */
@import "./design-system.css";
/* bm-design-system:end */
```

### 5d. Register the route

Use the corresponding snippet under `references/routing/`. Edit the user's router file in place when the framework supports clean detection (Vite + react-router-dom: look for the `<Routes>` block; Next.js: file-based, no edit needed). Otherwise print the snippet and tell the user where to paste it.

### 5e. Report missing dependencies

Inspect `package.json`. For any of the following that are missing, append them to a single install command and print it (do **not** run npm/yarn yourself):

- `@radix-ui/react-dialog`
- `class-variance-authority`
- `clsx`
- `tailwind-merge`
- `lucide-react`

Example:
> Run this to install missing deps:
> `npm install @radix-ui/react-dialog class-variance-authority clsx tailwind-merge lucide-react`

## Phase 6 — Update agent instructions

Open `AGENTS.md` if it exists, else `CLAUDE.md` if it exists, else create `AGENTS.md`.

Append (or replace, if the markers already exist) the block from `references/agent-instructions.md`. The block is delimited by HTML comments:

```markdown
<!-- bm-design-system:start -->
…content from references/agent-instructions.md, with __ROUTE_PATH__ substituted…
<!-- bm-design-system:end -->
```

If the file is being created from scratch, also include a one-line top-level title above the block.

## Phase 7 — Wrap up

Print a short summary in chat:

- The route URL the user can visit
- How to toggle dark mode (button in the header — also persists in localStorage)
- Which agent file got the managed block
- The install command (if dependencies were missing)
- A nudge: "Re-run this skill any time to add new sections or update tokens — it detects existing setup and merges non-destructively."

Stop.

## Canonical section list

The page contains these sections, in this order, each with an anchor ID matching the slug:

```
branding/
  colors                #colors
  typography            #typography
structure/
  shells                #shells
  main-navigation       #main-navigation
  sub-navigation        #sub-navigation
  page-headers          #page-headers
  body-content          #body-content
  footers               #footers
base-styles/
  heading-scale         #heading-scale
  h1                    #h1
  h2                    #h2
  h3                    #h3
  h4                    #h4
  h5                    #h5
  h6                    #h6
  anchor                #anchor
  paragraph             #paragraph
  strong                #strong
  lists                 #lists
  list-item             #list-item
  blockquote            #blockquote
  hr                    #hr
elements/
  iconography           #iconography
  buttons               #buttons
  forms                 #forms
  labels                #labels
  listings              #listings
  modal                 #modal
```

Each section uses the `<SectionShell>` wrapper which renders five blocks in this order:

1. **Preview** — the live, fully-styled element(s)
2. **Description** — one short paragraph
3. **Use cases** — bulleted: when to use, when not to use
4. **Sample HTML** — copy-pasteable JSX/HTML
5. **Options / variations** — for components with variants (Button sizes/styles, Modal sizes, etc.); omitted for primitives like `<hr>`

## Token derivation reference

See `references/derive-palette.md` for the exact algorithm that turns the user's three picked colors into the full ten-token light + dark palette.

## Style notes for the scaffolded page

- The page itself uses the design system it documents (eat your own dog food).
- Sidebar is sticky on desktop, collapses to a top sheet (button-triggered) on mobile.
- Each section has a unique `id` matching the canonical slug above for hash-link smooth scrolling.
- All section anchors use `scroll-margin-top` to clear the sticky header.
- Dark mode is class-based on `<html>` (Tailwind v4 `@variant dark` against `.dark`), persisted to `localStorage["bm-ds-theme"]`.
- The page is the **reference**, not the **boundary** — the user can extend it. The reusable primitives in `components/ui/` are the actual API the rest of the app imports.
