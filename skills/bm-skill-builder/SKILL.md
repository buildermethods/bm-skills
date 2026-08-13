---
name: bm-skill-builder
description: Build a new agent skill (or restructure an existing one) following Builder Methods conventions. Use when the user wants to create a skill, turn a repeatable process into a skill, or restructure a skill that has outgrown its shape — "create a skill", "make this a skill", "turn my proposal process into a skill", "restructure this skill".
---

# bm-skill-builder

Turns a repeatable process into a well-built agent skill: instructions in plain markdown and folders, portable across any agent harness. Works for brand-new skills and for restructuring existing ones that have outgrown a single SKILL.md.

## The process

1. **Understand the process** — `steps/understand.md`: ask the user to describe the process the skill is for, then infer what you can — job, inputs, artifact, raw material.
2. **Interview the user** — `steps/interview.md`: design the skill with the user — description, name, inputs (if any), its own interview (if any), realistic examples (if applicable), and the step plan. Recommend-then-confirm format throughout.
3. **Design the shape** — `steps/design.md`: simple or structured, per the conventions.
4. **Build it** — `steps/build.md`: write the files against the conventions checklist.
5. **Save it** — `steps/save.md`: ask where the skill should live — this repo's `.agents/skills/`, global `~/.agents/skills/`, or a `.claude` alternate — and place it there.
6. **Verify & hand off** — `steps/verify.md`: run it from its saved location, then teach the user the improvement loop.

## Hard rules

- A skill's instructions are plain markdown. SKILL.md and every instruction file (steps, phases, shared, reference docs) are .md — no formats a harness has to interpret. Bundled `scripts/` and reference material can be whatever the job needs (a Python script, a JSON schema, a template file). Nothing harness-specific in the skill's core — it must work anywhere.
- Start as simple as the process allows. Structure (steps/, phases/, shared/) must be earned by real complexity, never added on spec.
- Order lives in the orchestrator, never in the steps. SKILL.md (or a phase's own file) carries the numbering and points at each step file; step files are topic-named, order-agnostic, and say nothing about their position in the sequence.
- The full conventions live in `reference/conventions.md` — read them before designing, and check the finished skill against them before handing off.
