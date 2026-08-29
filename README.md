# BM Skills

A collection of public, open-source skills for builders — by [Brian Casel](https://buildermethods.com) at Builder Methods.

Works with any agent that supports the open [Agent Skills](https://agentskills.io) standard. Each skill is a folder under `skills/` with a `SKILL.md`.

## Stay in the loop

- [**Builder Methods Pro**](https://buildermethods.com/pro) — Training, community, and direct support from Brian and fellow builders.
- [**Builder Briefing**](https://buildermethods.com) — Brian's free weekly newsletter with updates and notes on building with AI.

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

[Documentation for PRD Creator](https://buildermethods.com/prd-creator)

### Skill Builder

`skills/bm-skill-builder`

Turns a repeatable process into a well-built agent skill — plain markdown and folders, portable across any agent harness. Interviews you to design the skill (description, name, inputs, its own per-run questions, and the step plan), builds it against a conventions checklist, then verifies it with a real run. Works for brand-new skills and for restructuring existing ones that have outgrown a single SKILL.md.

[Documentation for Skill Builder](https://buildermethods.com/skill-builder)

### Design System

`skills/bm-design-system`

Scaffolds a complete design system into a React + Tailwind v4 codebase: a single-page reference at `/admin/design-system` that previews and documents every primitive, plus reusable shadcn-style components and managed instructions in `AGENTS.md`/`CLAUDE.md` so future agents always defer to the system instead of drifting.

[Documentation for Design System](https://buildermethods.com/ai-design-system)

### Favicon Creator

`skills/bm-favicon-creator`

Generates a complete favicon set from a Lucide icon (or another source SVG you point to) — a rounded square with your chosen background and icon colors — then writes `favicon.ico`, `icon.svg`, `icon.png`, and `apple-touch-icon.png` to `public/` and wires the favicon meta tags into your layout.

[Documentation for Favicon Creator](https://buildermethods.com/favicon-creator)

## License

Open source. Free to use, fork, and adapt.
