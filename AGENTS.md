# Documentation project instructions

## About this project

- This is the external, customer-facing documentation for **IronBee**, your AI QA engineer that catches bugs before you ship
- Built on [Mintlify](https://mintlify.com); pages are MDX files with YAML frontmatter
- `docs.json` holds the navigation and the redirects, and is the source of truth for the page tree
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links
- This file, `DOCUMENTATION_STRUCTURE.md` and `.atlas-analysis.json` are internal and listed in `.mintignore`

## What IronBee is

IronBee verifies code changes the way a QA engineer would and keeps the evidence. There are two ways in.

**Platform verification runs.** IronBee runs the verification on its own infrastructure.
- A run is started by the IronBee GitHub Action, the Vercel integration, the Netlify extension, `ironbee verify`, or **Run instant verification** in the console.
- A project is verified only after it's enabled with a verification type, **Web** or **API**.
- Results appear in three places:
  - a GitHub check and pull request comment (Vercel and Netlify runs)
  - the Netlify deploy page
  - the console

**The CLI.** `@ironbee-ai/cli` wraps AI coding agents (Claude Code, Cursor, Codex) so they verify their own changes locally with IronBee DevTools. CLI verification cycles also appear in the console.

**The console** (console.ironbee.ai) shows:
- projects
- each project's verification runs, with the evidence (recording, screenshots, actions, network, traces, logs) and a live view while a run is in progress
- each project's scenarios: flows written in plain words, run against an environment one action at a time, with their editor and their runs
- project settings: environments, variables, secrets
- the daily project Quality analysis, with its findings and recommendations

## Terminology

Use these terms. When you describe something on screen, quote the console label exactly as the UI shows it.

| Use | Avoid | Notes |
|-----|-------|-------|
| verification run | job, task, test run | One verification of a deployment, commit or change. Say "verification job" only when you quote CLI output or `ironbee verify` fields |
| verification | test, check | Use "check" only for GitHub and Vercel checks and the **Checks** tab |
| verification cycle | loop, iteration | CLI only: one verify pass inside an agent session |
| session | run, task | CLI only: one AI client session |
| activity | step, action | CLI only: one agent turn. In the console scenario docs, **action** (an Act, Assert, Extract or Wait row) and **Step** (the grouping row) are console labels, so use them there |
| scenario | test case, script, flow (as a noun for the feature) | Console: a saved flow in a project, run against an environment. CLI: a saved scenario in `.ironbee/scenarios/`. When both could apply, say which one |
| verdict | outcome | The CLI's verdict (`pass`, `fail`, `not_applicable`). In the console the column is **Result** |
| fix | patch, correction | The agent's self-correction. **Suggested fixes** is a console tab label |
| finding | issue, problem | Findings come from analysis. **Issues** is a console tab label |
| recommendation | suggestion | Recommendations are directives derived from findings |
| span | trace item, event | OpenTelemetry spans in the **Traces** tab |
| environment, variable, secret | stage, env var, credential | Project settings |

Console labels, quoted verbatim:
- **Status:** Created, Queued, Starting, Running, Completed, Failed, Cancelled, Interrupted, Unknown
- **Result:** Pass, Fail, Not applicable, Soft fail, Unknown
- **Trigger:** Vercel, Netlify, GitHub Actions, API, CLI, Console
- **Scenario row kinds:** Act, Assert, Extract, Wait, Step, Import. Sections: Setup, Main, Teardown
- **Scenario outcome:** Passed, Failed, Soft fail, Setup failed, Run error, Ran out of time, Browser tools lost, Stopped before it started, Stopped, Running, Starting. In the verification list a failed scenario run's status reads **Run error**

## Product components and their doc sections

| Component | Docs | Notes |
|-----------|------|-------|
| IronBee GitHub App | Integrations > `integrations/github` | Repository access, sign-in with GitHub, checks and PR comments for Vercel and Netlify runs |
| `ironbee-ai/ironbee-action` | Integrations > GitHub Action (`github-action/*`) | Pin examples to `@v1.1.0`. The workflow secret `IRONBEE_API_KEY` is passed as the `ironbee_api_key` input |
| Vercel integration | Integrations > `integrations/vercel` | Preview deployments of enabled projects |
| Netlify extension | Integrations > `integrations/netlify` | Deploy previews and branch deploys of enabled sites |
| `@ironbee-ai/cli` npm package | CLI | Wraps AI coding agents; `ironbee verify` starts platform verification runs |
| IronBee Console | Console | Web UI at console.ironbee.ai |

## CLI conventions

- Install: `npm install -g @ironbee-ai/cli`
- Sign in: `ironbee login`. Set up a project: `ironbee install`
- Verification modes:
  - `ironbee verification enable` / `disable`. Enabled means assist mode.
  - `ironbee verification auto enable` switches to enforce mode.
  - `ironbee verification strict|fix|model` adjust the behavior.
- Platforms: `ironbee <browser|node|python|backend|android|terminal> enable|disable`
- Platform verification runs: `ironbee verify run web|api`
- Three config layers:
  - Global: `~/.ironbee/config.json`
  - Project: `.ironbee/config.json`, committed
  - Project-local: `.ironbee/config.local.json`, gitignored
- Credentials: `service.apiKey` or `IRONBEE_SERVICE_API_KEY`. `collector.apiKey` and `IRONBEE_API_KEY` are legacy aliases

## Navigation

`docs.json` is the source of truth. Each tab has an icon. The tabs are:

- **Overview:** the home page (`index.mdx`). It is the only way back to the home page besides the logo, so there is no separate Home link in the sidebar
- **Get started:** introduction, quickstart, key concepts, help
- **Integrations:** GitHub App, Vercel, Netlify, then the GitHub Action group
- **CLI:** get started, concepts, guides, configuration, advanced, AI clients
- **Console:** projects, verifications, scenarios (scenarios, editor, references and imports, runs), insights (analysis, findings, recommendations), settings

When you remove or rename a page, add a `redirects` entry in `docs.json`. Keep these inbound URLs working, because the product and the website link to them:
- `/cli/get-started/getting-started`
- `/integrations/github`
- `/integrations/netlify`
- `/console/access-tokens`
- `/console/account`

## SEO and GEO

- Give every page a unique `title`. When pages share a sidebar label, keep the short label in `sidebarTitle` and make the `title` specific: `CLI configuration` with `sidebarTitle: Configuration`
- Write `description` as plain text of 50-160 characters, with no Markdown. It is the meta description and the page's line in `llms.txt`
- Use `keywords` only for search synonyms the prose avoids on purpose, such as "test case" on the scenario pages
- Mintlify generates the sitemap, `robots.txt`, canonical URLs, OG images, JSON-LD, `llms.txt` and `llms-full.txt`. Don't add custom versions
- `seo.organization` in `docs.json` points at the ironbee.ai organization entity. Keep its `sameAs` list in sync with the website
- `markdown.instructions` is appended to every page's Markdown and to `llms.txt`. Keep it short and factual

## Style preferences

- Active voice, second person ("you")
- Sentence case for headings and frontmatter titles
- Bold for UI elements, quoted exactly as the console shows them: click **Run verification**, open **Settings**
- Code formatting for commands, file paths, env vars, config keys and action inputs: `ironbee install`, `.ironbee/config.json`, `IRONBEE_SERVICE_API_KEY`, `ironbee_api_key`
- Backtick-wrap any token that starts with `<` or `>` to avoid MDX parse errors: `` `<1s` ``, `` `>15m` ``
- Use a short hyphen (`-`), never an em dash (U+2014), including in image alt text, tables and frontmatter
  - When you remove an em dash, replace it with a hyphen or other punctuation. Don't just delete it
- En dash (U+2013) only for numeric ranges
- No emojis, except when quoting product output verbatim
- No trailing summaries; end sections cleanly

## Site design

`index.mdx` is a custom-mode page built with the `ib-*` classes in `style.css`, whose tokens follow the ironbee.ai palette. `style.css` also restyles Mintlify's chrome: the top tabs are chips with an icon, and the active tab has a background and a border. Follow these rules when you change either:

- Keep every border radius at 4px or less, including buttons, cards, chips, the code group, the top tabs and the sidebar's active page (desktop `#sidebar` and the phone menu `#mobile-nav`).
- Section eyebrow labels are neutral gray, with no accent color and no dot.
- Check the page in light and dark themes and at mobile width.

## Screenshots

- Console screenshots live in `images/console/<area>/` as a light and a dark capture of the same screen: `<name>-light.png` and `<name>-dark.png`.
- Embed both, right under the text they illustrate. The `ib-shot` classes in `style.css` show the one that matches the reader's theme:

  ```mdx
  <img className="ib-shot ib-shot-light" src="/images/console/projects/projects-cards-light.png" alt="Projects page in card view" />
  <img className="ib-shot ib-shot-dark" src="/images/console/projects/projects-cards-dark.png" alt="Projects page in card view" />
  ```

- Clip each shot to the part the text explains, a card, table, dialog or panel about 600-1000 px wide. A full-window capture is unreadable in the content column.
- Keep the console's top bar out of the frame, since it shows the plan name. Never show real people's names or emails, prices, plans, seats, limits, or a take-over control.
- Capture from the console running on mock data, not from a real account.

## Content boundaries

- This docs site is for **external customers**:
  - Don't document internal infrastructure (AWS CDK, Aurora, Redis, Lambda internals, admin CLI).
  - Don't document internal API endpoints or the database schema.
- Verification evidence (video, screenshots) is for the customer's use. Explain how to access and read it, not how it's stored
- Document only what customers can see or use in the product
  - Flag features that are visible but disabled as "coming soon" (e.g., **Dismiss** on recommendations)
- The console docs cover the verification list and the verification detail. Don't document agent session pages (session timeline, activities, fixes)
- Never mention human take-over in the live view
- Plans, prices and plan limits live only on `console/pricing.mdx`. It mirrors [ironbee.ai/pricing](https://ironbee.ai/pricing) word for word, and the website wins when they differ. Don't repeat prices or limits on other pages; link to the Pricing page instead
- The public REST API has no reference docs for now. That includes running a saved scenario through the API
- Security and compliance content changes only with the owner's sign-off
  - This covers `help/compliance.mdx` and the Security card in `getting-started/introduction.mdx`
- A feature that hasn't reached production yet is written on a branch and published together with its release
