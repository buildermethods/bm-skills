# Changelog

All notable changes to this marketplace are tracked here. Versions follow a date-based scheme: `YYYY.MM.DD`.

## 2026.10.8.1

- The plugin shows as **Builder Methods Skills**: `displayName` is set in `plugin.json` and the marketplace entry. The plugin `name` is `bm-skills`, and each skill is named `bm-*`.
- Added the Builder Methods icon at `.claude-plugin/icon.png`, referenced by `"icon"` in `plugin.json` for the plugin's directory listing.

## 2026.10.8

- Licensed the repo under MIT: added a `LICENSE` file and `"license": "MIT"` to the plugin manifests.
- Moved the marketplace's `repository` field from `metadata` to the plugin entry (and added it to `plugin.json`), so `claude plugin validate --strict` passes.

## 2026.10.4

- Updated **bm-skill-builder** so skills describe only their current state: removing or reversing something deletes it and every reference to it, with no "don't do X" replacements, change notes, or legacy fallbacks.

## 2026.9.1

- Updated **bm-skill-builder** so multi-step skills begin every invocation with a short numbered process overview, then immediately start the first step.

## 2026.8.13

Added the **bm-skill-builder** skill.

- Turns a repeatable process into a well-built agent skill: interviews you to design it (description, name, inputs, its own per-run questions, realistic examples, and the step plan), builds it against a conventions checklist, asks where it should live, then verifies it with a real run. Also restructures existing skills that have outgrown a single SKILL.md.

## 2026.8.10

Restructured to the open Agent Skills standard layout.

- All skills now live in a flat top-level `skills/` folder — the format read by Claude Code, Codex, Cursor, and any tool supporting the [Agent Skills](https://agentskills.io) standard. Install by copying into `.agents/skills/`, or via the Claude plugin marketplace as before.
- Consolidated the three per-skill plugins (**bm-prd-creator**, **bm-design-system**, **bm-favicon-creator**) into a single **bm-skills** plugin containing all three skills. Existing marketplace users: uninstall the old plugins, then `/plugin install bm-skills`.
- Adopted the [agentcanon](https://github.com/buildermethods/agentcanon) convention in this repo: `AGENTS.md` is canonical, `CLAUDE.md` is a symlink.
- Skill contents are unchanged.

## 2026.4.27

Initial public release.

- Added the **bm-prd-creator** plugin — guides you through creating a Product Requirements Document (PRD) for a new app or feature.
