# Documentation project instructions

## About this project

- This is the external customer-facing documentation for **IronBee** — an AI-powered verification and intelligence layer for agentic development workflows
- Built on [Mintlify](https://mintlify.com); pages are MDX files with YAML frontmatter
- Configuration lives in `docs.json`
- Run `mint dev` to preview locally
- Run `mint broken-links` to check links

## What IronBee is

IronBee wraps AI coding agents (Claude Code, Cursor) with:
- **Verification** — automated browser, Node, and backend testing after each code change
- **Fixes** — the agent's self-correction loop when verification fails
- **Sessions** — a recorded unit of agentic work from start to finish
- **Analysis** — LLM-powered insights over session data (quality, cost, behavioral patterns)
- **Findings & Recommendations** — surfaced observations and directives injected into future sessions

## Terminology — use these exact terms

| Preferred | Avoid |
|-----------|-------|
| session | run, task, job |
| verification | test, check (unless quoting UI labels) |
| fix | patch, correction |
| activity | step, action (unless quoting UI labels) |
| finding | issue, problem (findings are observations, not necessarily bugs) |
| recommendation | suggestion (recommendations are injected directives) |
| span | trace item, event (use "span" for OpenTelemetry spans inside a trace) |
| verdict | result (the pass/fail decision at the end of a verification cycle) |
| `in-progress` | running, active |
| `completed` | done, finished |
| `stopped` | cancelled, aborted |

## Product components and their doc sections

| Component | Tab | Notes |
|-----------|-----|-------|
| `@ironbee-ai/cli` npm package | CLI | Wraps the agent, runs verifications |
| `ironbee-action` GitHub Action | GitHub Action | CI/CD integration |
| IronBee Console | Console | Web UI at console.ironbee.ai |

## CLI conventions

- Install command: `npm install -g @ironbee-ai/cli`
- Verification toggle: `ironbee verification enable` / `ironbee verification disable`
- Backend enable: `ironbee verification enable-backend node` / `ironbee verification enable-backend spring`
- Three config layers: Global (`~/.ironbee/config.json`), Project (`.ironbee/config.json`, committed), Project-local (`.ironbee/config.local.json`, gitignored)
- `IRONBEE_API_KEY` env var overrides `collector.apiKey`

## Console navigation (current docs.json structure)

```
Getting Started → Introduction (introduction, quickstart, key-concepts)

CLI
  Get Started · Concepts · Guides · Configuration · Advanced · AI Clients

Console
  Projects & Sessions (projects, sessions, session-details, session-timeline,
                        session-analytics, activities, verifications,
                        verification-detail, fixes, fix-detail, other)
  Analysis (analysis, analysis-account-cost, analysis-account-session-insights,
             analysis-project-cost, analysis-project-session-insights, analysis-quality)
  Findings (findings-account, findings-project)
  Recommendations (recommendations-account, recommendations-project)
  Traces (traces)
  Others (profile, account, team, settings)

GitHub Action
  Get Started · Concepts · Guides · Configuration · Advanced
```

## Style preferences

- Active voice, second person ("you")
- Sentence case for headings
- Bold for UI elements: Click **Save**, open **Settings**
- Code formatting for commands, file paths, env vars, config keys: `ironbee install`, `.ironbee/config.json`, `IRONBEE_API_KEY`
- Backtick-wrap any token that starts with `<` or `>` to avoid MDX parse errors: `` `<1s` ``, `` `>15m` ``
- No emojis
- No trailing summaries — end sections cleanly

## Content boundaries

- This docs site is for **external customers** — do not document internal infrastructure (AWS CDK, Aurora, Redis, Lambda internals, admin CLI)
- Do not document internal API endpoints or database schema
- Verification evidence (video, screenshots) is for the customer's use — explain how to access and read it, not how it's stored
- Do not document features that are not yet exposed in the UI — flag as "coming soon" if visible but disabled (e.g., Dismiss button on recommendations)
