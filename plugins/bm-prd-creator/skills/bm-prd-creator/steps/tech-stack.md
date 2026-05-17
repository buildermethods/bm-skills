# Tech stack & starter template

**First, detect what's already there.** Without asking the user, check the codebase:

1. Read `CLAUDE.md` and/or `AGENTS.md` if either exists — these often spell out the stack and conventions.
2. Look at top-level config files: `Gemfile`, `package.json`, `composer.json`, `requirements.txt`, `pyproject.toml`, `go.mod`, `Cargo.toml`, etc.
3. Look at folder structure for framework signatures (`app/`, `config/`, `db/migrate/` for Rails; `pages/` or `app/` for Next.js; `src/` patterns; etc.)
4. Note any starter template signatures. If the codebase looks like the **Build New** starter (Rails 8 + Inertia + React 19 + Tailwind + shadcn + PostgreSQL + Solid Queue + the standard `AppShell` and authenticated routes), call that out specifically.

**Then summarize what you found** to the user in plain language: "Looks like you're working in a Rails app with React on the frontend, using the Build New starter template. That gives you user signup/login, the app shell, dark mode, and a job queue out of the box."

**If detection is empty or ambiguous** (no clear stack found, or this is a fresh empty project), recommend the Build New template as the default and explain in plain language what it gives them. Use AskUserQuestion to confirm or override:
- Use Build New (recommended)
- Use a different stack — I'll specify in chat
- I'm not sure — explain my options

**Then, the starter template question.** Ask what's already built into the starter that the PRD shouldn't re-spec. Default proposal based on Build New: signup/login/password reset, the User model, the authenticated app shell, settings/profile pages, dark mode, email previews in development, background job queue. Ask them to confirm or add to this list.
