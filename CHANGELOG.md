# Changelog

All notable changes to this marketplace are tracked here. Versions follow a date-based scheme: `YYYY.MM.DD`.

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
