# Agent Instructions

This file is the single source of truth for agent instructions in this repo.
`CLAUDE.md` is a symlink to this file — edit only `AGENTS.md`.

## About this repo

Public, open-source skills by Brian Casel / Builder Methods, in the flat
[Agent Skills](https://agentskills.io) layout: every skill is a direct child
of `skills/` containing a `SKILL.md`. The repo doubles as a Claude Code /
Cowork plugin marketplace via `.claude-plugin/` — a **single** plugin whose
`source` is `"./"`, so the flat `skills/` folder is the only real content
and the manifests never change when skills are added.

## Rules

- **One canonical copy.** Skills live only under `skills/<name>/`. Never
  reintroduce a `plugins/` tree, per-skill manifests, or wrapper folders.
- **Skill names** follow the Agent Skills spec: lowercase, digits, single
  hyphens; folder name and frontmatter `name` must match; keep the `bm-`
  prefix.
- **Adding or changing a skill:** update the skill folder, add the skill to
  README's list (with its buildermethods.com docs link), add a CHANGELOG
  entry, and bump `version` (date-based `YYYY.M.D`) in BOTH
  `.claude-plugin/marketplace.json` and `.claude-plugin/plugin.json` —
  that's what triggers marketplace users' updates.
- **Docs pages** for these tools live in the `buildermethods` app repo —
  when install instructions change here, update those pages too.
- This is a public repo: no private context, no Brian-specific paths inside
  skill instructions.
