# Example skill structures

## Simple (the default — most skills)

```
.agents/skills/write-proposal/
├── SKILL.md                  # inputs, interview, process, self-check — all of it
└── templates/
    └── proposal-template.md  # the artifact's defined format
```

## Structured (earned by real complexity)

```
.agents/skills/write-proposal/
├── SKILL.md                  # orchestration: the numbered step order + hard rules only
├── steps/                    # topic-named, order-agnostic — numbering lives in SKILL.md
│   ├── intake.md
│   ├── interview.md
│   ├── select-modules.md
│   ├── assemble.md
│   └── review.md             # the self-check step
├── sections/                 # this skill's module library (a form of reference/)
│   └── …one file per interchangeable section, each with a "use when:" note
└── templates/
```

Note the repo around it: shared knowledge like `training/positioning.md` lives at the REPO level because other skills read it too — not inside this skill.

## Phased (rare — don't start here)

```
.agents/skills/produce-course-module/
├── SKILL.md                  # the numbered phase order + gates
└── phases/                   # topic-named, like steps — order lives in SKILL.md
    ├── outline/              # PHASE.md orchestrates this phase's own numbered steps
    │   ├── PHASE.md
    │   └── steps/…
    ├── draft/…
    └── review/…
```
