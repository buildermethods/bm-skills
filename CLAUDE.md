# BM Skills

This repo is a collection of public open-source tools for builders, by Brian Casel @ Builder Methods ([buildermethods.com](http://buildermethods.com))

## Repo structure

Each plugin is a self-contained area of work or process, holding one or a few related skills used in that area. The list of plugins grows over time as new areas of work are introduced.

```
plugins/
  bm-<plugin-name>/
    .claude-plugin/
      plugin.json
    skills/
      bm-<skill-name>/
        SKILL.md
        ...other skill files (steps/, references/, scripts/, templates/, etc.)
```

## Naming conventions

All plugin and skill names are prefixed with `bm-`. The same name must appear in **every** place that references the plugin or skill — they must match exactly.

### Plugins

A plugin's name (e.g. `bm-prd-creator`) must match in all of these places:

1. The plugin folder name: `plugins/bm-<plugin-name>/`
2. The `name` field in `plugins/bm-<plugin-name>/.claude-plugin/plugin.json`
3. The `name` and `source` fields in the marketplace entry in `.claude-plugin/marketplace.json`

`plugin.json` format:

```json
{
  "name": "bm-<plugin-name>",
  "description": "<what the plugin does — one line>",
  "version": "1.0.0",
  "skills": "./skills/"
}
```

### Skills

A skill's name (e.g. `bm-prd-creator`) must match in both of these places:

1. The skill folder name: `plugins/bm-<plugin-name>/skills/bm-<skill-name>/`
2. The `name` field in the YAML frontmatter of `SKILL.md`

`SKILL.md` frontmatter format:

```yaml
---
name: bm-<skill-name>
description: <what the skill does — one line>
user_invocable: true
---
```

## Adding a new plugin

1. Create `plugins/bm-<plugin-name>/.claude-plugin/plugin.json` and `plugins/bm-<plugin-name>/skills/` using the format above.
2. Add a matching entry to the `plugins` array in `.claude-plugin/marketplace.json`.
3. Add at least one skill (see below).

## Adding a new skill

1. Create `plugins/bm-<plugin-name>/skills/bm-<skill-name>/SKILL.md` with the frontmatter format above.
2. Add any supporting files (steps, references, scripts, templates) under the skill folder.

## Version bumping

Whenever you edit any file under a `plugins/*/` directory, bump the patch version in that plugin's `.claude-plugin/plugin.json` (e.g. `1.0.1` → `1.0.2`) and the `version` in `.claude-plugin/marketplace.json` (the parent marketplace). Bump once per commit cycle — not on every individual file edit, but always bump again after a commit so that the next round of changes gets a new version number.