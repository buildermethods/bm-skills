# Changelog

All notable changes to this marketplace are tracked here. Versions follow a date-based scheme: `YYYY.MM.DD`.

## 2026.8.1

- **bm-prd-creator** (0.1.6): PRD output now goes to a per-build `_build_plan_<slug>/` folder, named from the app or feature locked in the core-purpose phase, instead of a fixed `_build_plan/`. A fixed name collided when a codebase had more than one build plan in flight or more than one agent session running: the second PRD overwrote or interleaved with the first. The agent-instructions note now describes the `_build_plan*/` family rather than a single folder.

## 2026.4.27

Initial public release.

- Added the **bm-prd-creator** plugin — guides you through creating a Product Requirements Document (PRD) for a new app or feature.
