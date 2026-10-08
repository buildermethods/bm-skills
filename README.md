# BM Skills

A collection of public, open-source skills for builders — by [Brian Casel](https://buildermethods.com?utm_source=bm-skills&utm_medium=plugin) at Builder Methods.

Works with any agent that supports the open [Agent Skills](https://agentskills.io) standard. Each skill is a folder under `skills/` with a `SKILL.md`.

## Stay in the loop

- [**Builder Methods Pro**](https://buildermethods.com/pro?utm_source=bm-skills&utm_medium=plugin) — Training, community, and direct support from Brian and fellow builders.
- [**Builder Briefing**](https://buildermethods.com?utm_source=bm-skills&utm_medium=plugin) — Brian's free weekly newsletter with updates and notes on building with AI.

## Installation

**Option 1 — Copy into your skills folder** (works with every tool):

```bash
git clone https://github.com/buildermethods/bm-skills.git
cp -r bm-skills/skills/* ~/.agents/skills/          # global, for all projects
# or into a single project:  cp -r bm-skills/skills/* your-app/.agents/skills/
```

`~/.agents/skills` is the industry-standard skills location. If you use Claude Code, set it up to read that folder too with one symlink — see [agentcanon](https://github.com/buildermethods/agentcanon).

**Option 2 — Ask your agent:**

```
Install the skills from github.com/buildermethods/bm-skills into my skills folder.
```

**Option 3 — Claude Code / Cowork plugin marketplace** (auto-updates from this repo):

```
/plugin marketplace add buildermethods/bm-skills
/plugin install bm-skills
```

> **Upgrading from the original per-plugin installs?** The old plugins (`bm-prd-creator`, `bm-design-system`, `bm-favicon-creator`) were consolidated into a single `bm-skills` plugin containing all three skills. Uninstall the old ones, then `/plugin install bm-skills`.

## Skills

- [**PRD Creator**](#prd-creator) — Turn a raw idea into a structured PRD plus milestone prompts for a coding agent.
- [**Skill Builder**](#skill-builder) — Turn any repeatable process into a well-built agent skill, guided by an interview.
- [**Design System**](#design-system) — Scaffold a React + Tailwind v4 design system with a live reference page and agent guardrails.
- [**Favicon Creator**](#favicon-creator) — Generate a full favicon set from a Lucide icon or SVG and wire it into your layout.

### PRD Creator

`skills/bm-prd-creator`

Guides you through turning a raw idea into a structured Product Requirements Document. Produces a complete `prd.md` plus a sequence of milestone prompt files you can hand to a coding agent to drive implementation.

Example prompt: "Use bm-prd-creator to turn my idea for a client-portal app into a PRD."

[Documentation for PRD Creator](https://buildermethods.com/prd-creator?utm_source=bm-skills&utm_medium=plugin)

### Skill Builder

`skills/bm-skill-builder`

Turns a repeatable process into a well-built agent skill — plain markdown and folders, portable across any agent harness. Interviews you to design the skill (description, name, inputs, its own per-run questions, and the step plan), builds it against a conventions checklist, then verifies it with a real run. Works for brand-new skills and for restructuring existing ones that have outgrown a single SKILL.md.

Example prompt: "Use bm-skill-builder to turn my client proposal process into a skill."

[Documentation for Skill Builder](https://buildermethods.com/skill-builder?utm_source=bm-skills&utm_medium=plugin)

### Design System

`skills/bm-design-system`

Scaffolds a complete design system into a React + Tailwind v4 codebase: a single-page reference at `/admin/design-system` that previews and documents every primitive, plus reusable shadcn-style components and managed instructions in `AGENTS.md`/`CLAUDE.md` so future agents always defer to the system instead of drifting.

Example prompt: "Use bm-design-system to set up a design system in my React + Tailwind v4 app."

[Documentation for Design System](https://buildermethods.com/ai-design-system?utm_source=bm-skills&utm_medium=plugin)

### Favicon Creator

`skills/bm-favicon-creator`

Generates a complete favicon set from a Lucide icon (or another source SVG you point to) — a rounded square with your chosen background and icon colors — then writes `favicon.ico`, `icon.svg`, `icon.png`, and `apple-touch-icon.png` to `public/` and wires the favicon meta tags into your layout.

Example prompt: "Use bm-favicon-creator to make a favicon from the Lucide rocket icon."

[Documentation for Favicon Creator](https://buildermethods.com/favicon-creator?utm_source=bm-skills&utm_medium=plugin)

## What the skills access

The skills run inside your agent and read and write files in your project. They contain no telemetry, analytics, or calls to Builder Methods, and send nothing to Builder Methods.

### PRD Creator

- **Reads:** your project's `AGENTS.md` / `CLAUDE.md`, top-level config files (`package.json`, `Gemfile`, `pyproject.toml`, etc.), and folder structure, to detect the tech stack.
- **Writes:** `_build_plan/prd.html` and/or `_build_plan/prd.md`, plus `_build_plan/milestones/N-{slug}/prompt.md` for each milestone. Appends a short `_build_plan/` section to `AGENTS.md` or `CLAUDE.md` (creates `AGENTS.md` if neither exists).
- **Fetches:** nothing while it runs. The generated `prd.html` loads Tailwind from `cdn.tailwindcss.com`, the Inter font from Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`), and Lucide icons from `unpkg.com/lucide@latest` when you open it in a browser.
- **Installs:** nothing.

### Skill Builder

- **Reads:** your description of the process, existing examples of that process in your repo (past outputs, docs), and the existing skill when restructuring one.
- **Writes:** the new skill folder to the location you confirm: the repo's `.agents/skills/`, global `~/.agents/skills/`, or `.claude/skills/` / `~/.claude/skills/`. Runs the new skill once to verify it.
- **Fetches:** nothing.
- **Installs:** nothing.

### Design System

- **Reads:** `package.json`, framework config (`vite.config.*`, `next.config.*`, `Gemfile`), your CSS entry file, `AGENTS.md` / `CLAUDE.md`, and your existing UI components (to find UI that could migrate to the design system).
- **Writes:** the reference page route, `components/design-system/`, `components/ui/`, `lib/theme.ts`, `lib/utils.ts` (only if missing), and a design-system stylesheet. Edits your entry CSS, router file (Vite + react-router), and HTML layout `<head>` (font links and a theme boot script). Adds a managed block to `AGENTS.md` / `CLAUDE.md` (creates `AGENTS.md` if neither exists) and removes or rewrites conflicting styling instructions there, asking when unsure. Migrates existing UI only if you opt in.
- **Fetches:** nothing while it runs. The installed layout loads Inter and DM Sans from Google Fonts in the browser, and the theme toggle saves the light/dark choice in the browser's `localStorage`.
- **Installs:** nothing. It prints an `npm install` command for any missing packages (`@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `class-variance-authority`, `clsx`, `tailwind-merge`, `lucide-react`, `@milkdown/crepe`, `@milkdown/core`, `@milkdown/react`) for you to run.

### Favicon Creator

- **Reads:** your layout file, your `public/` folder, and a source `.svg` file if you point to one.
- **Writes:** `favicon.ico`, `icon.svg`, `favicon.svg`, `icon.png`, `icon-192.png`, and `apple-touch-icon.png` to `public/` (and the icon files to `app/` in a Next.js app-router project), plus temporary files in `/tmp`. Edits the favicon and `theme-color` tags in your layout `<head>`.
- **Fetches:** the icon's SVG from `lucide.dev` (default), or from the official source of another icon library you name.
- **Installs:** nothing. It runs `rsvg-convert` and ImageMagick's `magick` on your machine; if either is missing, it stops and asks you to install them.

## License

Open source. Free to use, fork, and adapt.

Released under the [MIT License](LICENSE).
