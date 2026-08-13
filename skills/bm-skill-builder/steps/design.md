# Design the shape

One decision, made with the user (recommend-then-confirm) — **simple or structured?** Recommend the simplest shape that holds the process:

- **Simple** (default): one SKILL.md, plus a `templates/` file if the artifact has a defined format. Right for processes with one linear flow the SKILL.md can hold in under a page or two.
- **Structured:** SKILL.md handles order and orchestration only; each step's detailed instructions unpack into an unnumbered, topic-named file in `steps/`. Add `shared/` for instructions used by multiple steps (never duplicate), `scripts/` for anything the agent executes, `reference/` for material the skill consults. Right when the SKILL.md would otherwise grow too large.
- **Phased** (rare): for genuinely large processes, a `phases/` folder where each phase has its own `steps/` and its own orchestrating file. Don't reach for this until structured has actually strained.

Wherever structure is used, order lives only in the orchestrator (SKILL.md, or the phase's own file) — the step files themselves stay order-agnostic, so steps can be reordered, inserted, or removed by editing one file.

(Where the skill lives — local vs global, `.agents` vs `.claude` — is the user's call too, but save that question for when the skill is built and ready to place.)

One placement rule that isn't a choice: material used by MULTIPLE skills (voice docs, brand guidelines, positioning) belongs in the repo's `training/` folder, not inside any one skill — and skills never reference files inside other skills.
