# BM Skills

A collection of public, open-source skills for builders — by [Brian Casel](https://buildermethods.com) at Builder Methods.

## Stay in the loop

- [**Builder Methods Pro**](https://buildermethods.com/pro) — Training, community, and direct support from Brian and fellow builders.
- [**Builder Briefing**](https://buildermethods.com) — Brian's free weekly newsletter with updates and notes on building with AI.

## Installation

This repo is a Claude Code plugin marketplace. Add it once:

```
/plugin marketplace add buildermethods/bm-skills
```

Then install any of the skills below:

```
/plugin install <skill-name>
```

## Skills

- [**PRD Creator**](#prd-creator) — Turn a raw idea into a structured PRD plus milestone prompts for a coding agent.
- [**Design System**](#design-system) — Scaffold a React + Tailwind v4 design system with a live reference page and agent guardrails.
- [**Favicon Creator**](#favicon-creator) — Generate a full favicon set from a Lucide icon or SVG and wire it into your layout.

### PRD Creator

`bm-prd-creator`

Guides you through turning a raw idea into a structured Product Requirements Document. Produces a complete `prd.md` plus a sequence of milestone prompt files you can hand to a coding agent to drive implementation.

```
/plugin install bm-prd-creator
```

[Documentation for PRD Creator](https://buildermethods.com/prd-creator)

### Design System

`bm-design-system`

Scaffolds a complete design system into a React + Tailwind v4 codebase: a single-page reference at `/admin/design-system` that previews and documents every primitive, plus reusable shadcn-style components and managed instructions in `AGENTS.md`/`CLAUDE.md` so future agents always defer to the system instead of drifting.

```
/plugin install bm-design-system
```

[Documentation for Design System](https://buildermethods.com/ai-design-system)

### Favicon Creator

`bm-favicon-creator`

Generates a complete favicon set from a Lucide icon (or another source SVG you point to) — a rounded square with your chosen background and icon colors — then writes `favicon.ico`, `icon.svg`, `icon.png`, and `apple-touch-icon.png` to `public/` and wires the favicon meta tags into your layout.

```
/plugin install bm-favicon-creator
```

[Documentation for Favicon Creator](https://buildermethods.com/favicon-creator)

## License

Open source. Free to use, fork, and adapt.
