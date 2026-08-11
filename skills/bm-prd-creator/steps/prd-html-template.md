# PRD HTML template

When the user picked **HTML** or **Both** in the format-choice phase, write `_build_plan/prd.html` using the scaffold and section snippets below. The file must be fully self-contained — only CDN-loaded dependencies (Tailwind, Google Fonts, Lucide), no other files, no build step.

## File scaffold

Start every `prd.html` from this scaffold. Fill in the `{{PLACEHOLDERS}}` and section blocks as described under "Section visual treatments" below. Do not rename CSS classes — they work as written with Tailwind Play CDN.

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{{APP_NAME}} — PRD</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = { darkMode: 'class' };
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <script src="https://unpkg.com/lucide@latest"></script>
  <style>
    html { font-family: 'Inter', system-ui, -apple-system, sans-serif; }
    body { font-feature-settings: "cv11", "ss01"; }
    @media print {
      html { background: white !important; color: black !important; color-scheme: light; }
      html.dark { color-scheme: light; }
      html.dark body, html.dark * { background: white !important; color: black !important; border-color: #d4d4d8 !important; }
      .no-print { display: none !important; }
      .print-card { break-inside: avoid; page-break-inside: avoid; }
      header.sticky { position: static !important; backdrop-filter: none !important; }
      main { padding-top: 0 !important; }
      a { color: black !important; text-decoration: none !important; }
    }
  </style>
</head>
<body class="bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased">
  <header class="sticky top-0 z-10 backdrop-blur bg-zinc-50/80 dark:bg-zinc-950/80 border-b border-zinc-200 dark:border-zinc-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
      <span class="text-sm font-medium text-zinc-500 dark:text-zinc-400">PRD · {{APP_NAME}}</span>
      <button id="theme-toggle" class="no-print inline-flex items-center justify-center w-9 h-9 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition" aria-label="Toggle theme">
        <i data-lucide="sun" class="hidden dark:inline-block w-4 h-4"></i>
        <i data-lucide="moon" class="inline-block dark:hidden w-4 h-4"></i>
      </button>
    </div>
  </header>

  <main class="max-w-4xl mx-auto px-4 sm:px-6 py-10 sm:py-14 space-y-14">

    <!-- DISCLAIMER (keep verbatim) -->
    <div class="rounded-lg border border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-950/30 p-4 text-sm text-amber-900 dark:text-amber-200">
      <p><strong class="font-semibold">About this file:</strong> Everything in <code class="font-mono text-xs">_build_plan/</code> (this PRD and the per-milestone folders) is a temporary documentation artifact for the initial build-out of this codebase. These files are not functional — no code, configuration, runtime logic, tests, or deployment process should import, read, reference, or depend on anything in <code class="font-mono text-xs">_build_plan/</code>. Once the initial milestones are built and shipped, the entire <code class="font-mono text-xs">_build_plan/</code> folder is expected to be deleted from the codebase.</p>
    </div>

    <!-- HERO -->
    <section>
      <h1 class="text-4xl sm:text-5xl font-bold tracking-tight">{{APP_NAME}}</h1>
      <p class="mt-5 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">{{WHAT_WE_ARE_BUILDING}}</p>
      <div class="mt-6 flex flex-wrap gap-2">
        {{TECH_STACK_BADGES}}
      </div>
    </section>

    <!-- WHAT THE APP DOES -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>What the app does
      </h2>
      <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3 list-none p-0">
        {{FEATURE_CARDS}}
      </ul>
    </section>

    <!-- ALREADY PROVIDED -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <i data-lucide="package-check" class="w-3.5 h-3.5"></i>Already provided by {{STARTER_NAME}}
      </h2>
      <ul class="mt-5 flex flex-wrap gap-2 list-none p-0">
        {{STARTER_PROVIDED_PILLS}}
      </ul>
    </section>

    <!-- OUT OF SCOPE -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <i data-lucide="minus-circle" class="w-3.5 h-3.5"></i>Out of scope (v1)
      </h2>
      <ul class="mt-5 space-y-2.5 list-none p-0">
        {{OUT_OF_SCOPE_ITEMS}}
      </ul>
    </section>

    <!-- INTEGRATIONS (omit section entirely if no integrations) -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <i data-lucide="plug" class="w-3.5 h-3.5"></i>External integrations
      </h2>
      <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {{INTEGRATION_CARDS}}
      </div>
    </section>

    <!-- DATA MODEL -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <i data-lucide="database" class="w-3.5 h-3.5"></i>Data model
      </h2>
      <p class="mt-3 text-sm text-zinc-500 dark:text-zinc-400">What the app needs to remember.</p>
      <div class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {{ENTITY_CARDS}}
      </div>
    </section>

    <!-- MILESTONES -->
    <section>
      <h2 class="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
        <i data-lucide="route" class="w-3.5 h-3.5"></i>Milestones
      </h2>
      <div class="mt-5 space-y-5">
        {{MILESTONE_CARDS}}
      </div>
    </section>

    <footer class="pt-8 border-t border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 dark:text-zinc-400">
      Generated by <span class="font-medium">bm-prd-creator</span>. Open the milestone-1 <code class="font-mono">prompt.md</code> to start building.
    </footer>
  </main>

  <script>
    (function () {
      var html = document.documentElement;
      var stored = localStorage.getItem('prd-theme');
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var initial = stored ? stored : (prefersDark ? 'dark' : 'light');
      if (initial === 'dark') html.classList.add('dark');
      var btn = document.getElementById('theme-toggle');
      if (btn) {
        btn.addEventListener('click', function () {
          var isDark = html.classList.toggle('dark');
          localStorage.setItem('prd-theme', isDark ? 'dark' : 'light');
        });
      }
      if (window.lucide) window.lucide.createIcons();
    })();
  </script>
</body>
</html>
```

## Section visual treatments

Drop these snippets into the matching placeholder. Repeat blocks per item.

### Tech-stack badge — `{{TECH_STACK_BADGES}}`

One badge per item (framework, database, hosting, key libraries from the locked stack).

```html
<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-medium text-zinc-700 dark:text-zinc-300">{{TECH_NAME}}</span>
```

### Feature card — `{{FEATURE_CARDS}}`

One `<li>` per high-level capability from "What the app does". Pick a sensible Lucide icon per item (see icon hints below).

```html
<li class="print-card rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
  <div class="flex items-start gap-3">
    <div class="shrink-0 mt-0.5 w-8 h-8 rounded-md bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
      <i data-lucide="{{LUCIDE_ICON}}" class="w-4 h-4 text-zinc-700 dark:text-zinc-300"></i>
    </div>
    <div>
      <p class="font-medium text-zinc-900 dark:text-zinc-100">{{FEATURE_LABEL}}</p>
      <p class="mt-1 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{{FEATURE_DESCRIPTION}}</p>
    </div>
  </div>
</li>
```

### Starter-provided pill — `{{STARTER_PROVIDED_PILLS}}`

One pill per pre-built capability.

```html
<li class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm text-zinc-700 dark:text-zinc-300">
  <i data-lucide="check" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"></i>{{ITEM}}
</li>
```

### Out-of-scope item — `{{OUT_OF_SCOPE_ITEMS}}`

```html
<li class="flex items-start gap-3">
  <i data-lucide="x" class="w-4 h-4 mt-1 shrink-0 text-zinc-400 dark:text-zinc-600"></i>
  <span class="text-zinc-700 dark:text-zinc-300"><span class="font-medium">{{ITEM}}</span><span class="text-zinc-500 dark:text-zinc-400"> — {{REASON}}</span></span>
</li>
```

### Integration card — `{{INTEGRATION_CARDS}}`

One per external service. List the credentials the user must obtain.

```html
<div class="print-card rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
  <div class="flex items-center gap-2">
    <i data-lucide="plug" class="w-4 h-4 text-zinc-500 dark:text-zinc-400"></i>
    <h3 class="font-semibold text-zinc-900 dark:text-zinc-100">{{PROVIDER_NAME}}</h3>
    <span class="ml-auto text-xs text-zinc-500 dark:text-zinc-400">{{PURPOSE}}</span>
  </div>
  <p class="mt-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">{{PLAIN_LANGUAGE_EXPLANATION}}</p>
  <p class="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5"><i data-lucide="key" class="w-3 h-3"></i>Credentials needed</p>
  <ul class="mt-2 space-y-1.5 list-none p-0">
    <!-- repeat per credential -->
    <li class="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"><i data-lucide="key-round" class="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500"></i>{{CREDENTIAL_NAME}}</li>
  </ul>
</div>
```

### Entity card — `{{ENTITY_CARDS}}`

One card per entity in the data model. The table holds fields described in plain language (not column types). The "Related to" footer lists other entity names.

```html
<div class="print-card rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-5">
  <div class="flex items-center gap-2">
    <i data-lucide="box" class="w-4 h-4 text-zinc-500 dark:text-zinc-400"></i>
    <h3 class="font-semibold text-zinc-900 dark:text-zinc-100">{{ENTITY_NAME}}</h3>
  </div>
  <table class="mt-4 w-full text-sm">
    <tbody class="divide-y divide-zinc-100 dark:divide-zinc-800">
      <!-- repeat per field -->
      <tr>
        <td class="py-2 pr-4 font-mono text-xs font-medium text-zinc-700 dark:text-zinc-300 align-top whitespace-nowrap">{{FIELD_NAME}}</td>
        <td class="py-2 text-zinc-600 dark:text-zinc-400 leading-relaxed">{{FIELD_DESCRIPTION}}</td>
      </tr>
    </tbody>
  </table>
  <p class="mt-4 text-xs text-zinc-500 dark:text-zinc-400"><span class="font-semibold uppercase tracking-[0.14em] text-[11px]">Related to</span> · {{RELATIONSHIPS}}</p>
</div>
```

### Milestone card — `{{MILESTONE_CARDS}}`

One per milestone, in order. The two-column "What gets built" / "Not in this milestone" stacks on mobile.

```html
<article class="print-card rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
  <header class="flex items-center gap-3 p-5 border-b border-zinc-100 dark:border-zinc-800">
    <span class="shrink-0 w-8 h-8 rounded-full bg-zinc-900 dark:bg-zinc-100 text-zinc-50 dark:text-zinc-900 flex items-center justify-center text-sm font-semibold">{{N}}</span>
    <h3 class="font-semibold text-lg text-zinc-900 dark:text-zinc-100">{{MILESTONE_NAME}}</h3>
  </header>
  <div class="p-5">
    <p class="text-zinc-600 dark:text-zinc-400 leading-relaxed">{{MILESTONE_FRAMING}}</p>
    <div class="mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
          <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400"></i>What gets built
        </h4>
        <ul class="mt-3 space-y-2 text-sm text-zinc-700 dark:text-zinc-300 list-none p-0">
          <!-- repeat per item -->
          <li class="flex items-start gap-2"><i data-lucide="check" class="w-3.5 h-3.5 mt-0.5 shrink-0 text-emerald-600 dark:text-emerald-400"></i><span>{{IN_SCOPE_ITEM}}</span></li>
        </ul>
      </div>
      <div>
        <h4 class="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
          <i data-lucide="x-circle" class="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500"></i>Not in this milestone
        </h4>
        <ul class="mt-3 space-y-2 text-sm text-zinc-500 dark:text-zinc-400 list-none p-0">
          <!-- repeat per item -->
          <li class="flex items-start gap-2"><i data-lucide="minus" class="w-3.5 h-3.5 mt-0.5 shrink-0"></i><span>{{OUT_OF_SCOPE_ITEM}}</span></li>
        </ul>
      </div>
    </div>
    <div class="mt-5 rounded-md border-l-4 border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 p-4 text-sm text-emerald-900 dark:text-emerald-200">
      <p class="flex items-start gap-2"><i data-lucide="flag" class="w-4 h-4 mt-0.5 shrink-0"></i><span><span class="font-semibold">Done when:</span> {{DONE_WHEN}}</span></p>
    </div>
  </div>
</article>
```

## Lucide icon hints

Pick icons that fit the meaning. Common safe choices:

- Feature cards: `zap`, `users`, `mail`, `bell`, `search`, `tag`, `bookmark`, `file-text`, `calendar`, `lock`, `link`, `image`, `message-square`, `share-2`, `download`, `upload`, `play`, `wand-2`, `pencil`, `eye`
- Auth/users: `user`, `user-plus`, `shield`, `lock`, `log-in`
- Data/storage: `database`, `box`, `archive`, `folder`
- AI/automation: `wand-2`, `sparkles`, `bot`, `cpu`
- Communication: `mail`, `send`, `message-square`, `phone`
- Money/billing: `credit-card`, `dollar-sign`, `receipt`
- If unsure, use `circle-dot` — never invent icon names.

## Style and voice notes

- **Keep prose tight.** Cards lose their value if they're stuffed with sentences. One line label + one short description sentence per feature card.
- **Don't add scope.** HTML is purely presentation. Never invent features, data fields, milestones, or integrations to "fill out" a card grid. If the PRD section is short, render fewer cards — empty white space is fine.
- **No emoji.** Use Lucide icons only.
- **No section IDs needed.** This is single-page, scroll-only — no table of contents, no anchor links, no `id` attributes required.
- **Omit empty sections.** If a PRD has no external integrations, delete the entire integrations `<section>` block — don't render an empty one.
- **Section spacing.** The outer `<main>` already has `space-y-14`. Inside cards, use the spacing in the snippets as-is.
- **Same content as markdown PRD.** When the user picked **Both**, the HTML and markdown must describe the same scope. The HTML is a different presentation of the same locked decisions, never a different plan.
