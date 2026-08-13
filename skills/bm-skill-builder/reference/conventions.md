# Skill conventions

*The Builder Methods skill structure canon. A strong default, not a mandate — not every skill needs every convention, but every departure should be a decision.*

## Core conventions

1. **Required inputs, declared — when a run needs them.** If the skill needs inputs to start, it states what they are; inputs arrive at invocation or, if missing, the agent asks before doing anything else. Some skills genuinely need none — then this section simply doesn't exist.
2. **Targeted intake questions — when human judgment varies per run.** If some decisions genuinely vary run to run and can't be encoded, the skill asks the user about those early — sometimes 1–2 questions, sometimes more, sometimes none at all. Design them recommend-then-confirm: the agent leads with its recommended answer plus alternates, so the user can just confirm or choose — with room to steer hard when they want to.
3. **Templated artifacts.** Whatever the skill produces has a defined format or template — mined from real past examples of the work whenever they exist. When a realistic example of the finished work exists (or the user can supply one), build it into the skill — a real example aligns output better than any description of it.
4. **Steps unpacked into files.** SKILL.md handles numbering and orchestration; each step's detail lives in `steps/` (or, for genuinely large processes, `phases/<phase>/steps/`). Never let one SKILL.md grow too large — but never add structure a simple skill doesn't need.
5. **Order lives in the orchestrator, not the steps.** The numbered sequence exists in exactly one place: SKILL.md, or the phase's own file when there are phases. Each numbered item names the step and points at its file. Step files are therefore:
   - **Unnumbered filenames** — `interview.md`, not `02-interview.md`.
   - **Topic-only headings** — `# Interview the user`, not `# Step 2 — Interview the user`.
   - **Position-agnostic content** — no "in the previous step", "before moving to step 4", "you should already have". Cross-reference another step by name if you truly must, never by number or position.

   Why: steps get reordered, split, merged, and dropped as a skill improves in place. When order lives only in the orchestrator, that's a one-file edit; when it's baked into filenames and prose, it's a rewrite — and stale ordering language quietly misleads the agent.
6. **Progressive disclosure.** A skill loads in three levels: frontmatter metadata (always in the agent's context), the SKILL.md body (loaded when the skill triggers), and unpacked files (loaded only when read). Structure for that:
   - Keep the SKILL.md body lean — orchestration and hard rules, with detail pushed into files that load on demand.
   - Link every unpacked file from SKILL.md (or its phase file) with a clear note on when to read it — a file nothing points to never gets read.
   - Keep reference files one level deep from SKILL.md — no chains of references pointing at references.
   - Give any reference file over ~100 lines a table of contents at the top, so a preview reveals its full scope.
7. **`shared/` for DRY.** Instructions used by multiple steps live once, in `shared/`.
8. **`scripts/` for executables.** Anything the agent runs during the process.
9. **`reference/` vs `training/`.** Reference material and examples used by THIS skill live in the skill's `reference/`. Material used by multiple skills (voice, brand, positioning) lives in the repo's `training/` folder. Skills never reference files inside other skills.

## Supporting conventions

10. **Discoverable description — the ONLY home for "when to use."** Frontmatter `description` says what the skill does and when to use it, with trigger phrases drawn from what the user would actually say to invoke it. ALL when-to-use information lives in the description: the body only loads after the skill has already triggered, so a "when to use this skill" section in the body can never affect discovery — it's dead weight.
11. **A self-check step.** The skill defines what "done" looks like and verifies its own output against it before declaring a run complete.
12. **Scope boundary.** One "this skill does not…" line in SKILL.md.
13. **Only what a run needs.** No README, CHANGELOG, installation guide, or notes about how the skill was made inside the skill folder — a skill contains only the files its executing agent uses to do the job.
14. **Imperative voice.** Write skill prose in imperative/infinitive form — "Extract the text", not "You should extract the text" or "The agent will extract the text."
15. **Harness-agnostic core, markdown instructions.** SKILL.md and all instruction files (steps, phases, shared, reference docs) are plain markdown in plain folders; nothing harness-specific in the skill's core. Bundled files that aren't instructions — `scripts/`, schemas, templates, assets — take whatever format the job needs.
16. **Improve in place.** After real runs, friction gets fixed by editing the skill — expect the shape to evolve with usage.
