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

### bm-prd-creator

Guides you through turning a raw idea into a structured Product Requirements Document. Produces a complete `prd.md` plus a sequence of milestone prompt files you can hand to a coding agent to drive implementation.

```
/plugin install bm-prd-creator
```

### bm-design-system

Scaffolds a complete design system into a React + Tailwind v4 codebase: a single-page reference at `/admin/design-system` that previews and documents every primitive, plus reusable shadcn-style components and managed instructions in `AGENTS.md`/`CLAUDE.md` so future agents always defer to the system instead of drifting.

```
/plugin install bm-design-system
```

## Documentation

Full documentation and usage guides for each skill: [**buildermethods.com/bm-skills**](https://buildermethods.com/bm-skills)

## License

Open source. Free to use, fork, and adapt.
