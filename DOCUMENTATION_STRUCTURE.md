# IronBee Documentation Structure (External Customers)

## 📋 Overview

This documentation is for external customers who:
1. Install **@ironbee-ai/cli** npm package in their projects
2. Configure it to work with their codebase
3. Use **ironbee-action** in GitHub CI/CD pipelines
4. View results in **IronBee Console** (web UI)

---

## 📚 Documentation Sections to Create

### 1️⃣ **Getting Started**
Target: New users just discovering IronBee

**Pages needed:**
- `getting-started/what-is-ironbee.mdx` - What is IronBee and what problem does it solve?
- `getting-started/quick-start.mdx` - 5-minute quickstart
- `getting-started/key-concepts.mdx` - Terminology: Session, Verification, Fix, Activity, etc.

---

### 2️⃣ **CLI Installation & Setup**
Target: Developers installing the CLI

**Pages needed:**
- `cli/installation.mdx`
  - Install: `npm install -g @ironbee-ai/cli`
  - Supported clients: Claude Code, Cursor
  - System requirements (Node.js 20+)
  - Verify installation: `ironbee --version`

- `cli/configuration.mdx`
  - Global config: `~/.ironbee/config.json`
  - Project config: `<project>/.ironbee/config.json`
  - Config deep-merge behavior
  - Example configurations
  - Common settings:
    - `ignoredVerifyPatterns`
    - `maxRetries`
    - `browser.verifyPatterns`
    - `backend.node.verifyPatterns`

- `cli/setup.mdx`
  - `ironbee install` - Auto-setup in project
  - What gets generated (hooks, skills, MCP config, permissions)
  - Cursor-specific activation steps
  - Verification vs monitoring-only modes

- `cli/commands.mdx`
  - `ironbee install [dir] [--client]` - Setup project
  - `ironbee uninstall [dir]` - Remove setup
  - `ironbee status [dir]` - Check active sessions
  - `ironbee verify [session-id]` - Dry-run verdict
  - `ironbee analyze [session-id]` - Session metrics
  - `ironbee enable-backend <runtime>` - Enable Node verification
  - `ironbee disable-backend <runtime>` - Disable Node verification
  - `ironbee enable-verification` - Turn enforcement on
  - `ironbee disable-verification` - Monitoring-only mode

- `cli/agent-commands.mdx` - Slash commands agents can use
  - `/ironbee-verify` - Default verification
  - `/ironbee-verify full` - Complete checklist
  - `/ironbee-verify visual` - Visual testing only
  - `/ironbee-verify functional` - Functional testing only
  - `/ironbee-analyze` - Get session insights

- `cli/troubleshooting.mdx`
  - Common issues
  - Debugging tips
  - Log locations

---

### 3️⃣ **GitHub Actions Integration**
Target: DevOps/CI-CD engineers

**Pages needed:**
- `github-action/overview.mdx`
  - What ironbee-action does
  - How it works with Claude Code
  - When to use it (PR verification, push-to-main, scheduled tests)

- `github-action/getting-started.mdx`
  - Minimal setup (copy-paste ready)
  - Required secrets: `ANTHROPIC_API_KEY`
  - Required permissions

- `github-action/trigger-modes.mdx`
  - Pull request trigger (diff-based verification)
  - Push to main (creates fix PRs)
  - Scheduled verification (smoke tests)
  - Manual trigger (workflow_dispatch)

- `github-action/configuration.mdx`
  - All input parameters
  - Example configurations
    - Basic setup
    - With custom build/start commands
    - With OAuth token
    - With S3 evidence upload
    - Verbose logging

- `github-action/outputs.mdx`
  - `verdict` - pass/fail/unknown
  - `artifacts_url` - Evidence download link

- `github-action/authentication.mdx`
  - Anthropic API key (required)
  - Claude Code OAuth token (alternative)
  - GitHub token (auto-provided)
  - AWS OIDC for S3 (optional)

- `github-action/evidence-artifacts.mdx`
  - Where evidence is stored
  - Screenshot organization
  - Video recordings
  - Evidence retention
  - S3 upload for inline images

---

### 4️⃣ **Console Features**
Target: End users viewing results

**Pages needed:**

#### **Projects**
- `console/projects.mdx`
  - What is a project?
  - Creating a project
  - Project settings
  - Inviting team members to project
  - Project metrics overview
  - Archived projects

#### **Sessions**
- `console/sessions.mdx`
  - What is a session?
  - Session lifecycle
  - Session status (running, completed, failed)
  - Session list page
    - Filtering sessions
    - Sorting options
    - Time range filters
    - Status filters

- `console/session-details.mdx`
  - Session overview panel
  - Session metadata
  - Quick stats
  - Navigation tabs

#### **Activities**
- `console/activities.mdx`
  - What are activities?
  - Activity types (code change, verification, fix)
  - Activity timeline
  - Viewing activity details
  - Activity logs/transcripts

- `console/activity-detail.mdx`
  - Activity metadata
  - Agent transcript
  - Tools used
  - Timestamps

#### **Verifications**
- `console/verifications.mdx`
  - What is verification?
  - Verification lifecycle
  - Verification status (in-progress, passed, failed)
  - Multiple verification cycles (browser + backend)
  - Verification summary

- `console/verification-detail.mdx`
  - Verification video player (with timeline)
  - Browser interactions timeline
  - Screenshots
  - Tool calls executed
  - Evidence collection
  - Verification verdict reasoning

#### **Fixes**
- `console/fixes.mdx`
  - What is a fix?
  - Fix status (pending, completed, failed)
  - Fix timeline
  - Before/after comparison
  - Re-verification after fix

- `console/fix-detail.mdx`
  - Code changes in fix
  - Diff view
  - Files affected
  - Re-verification results
  - Fix status history

#### **Traces & Spans**
- `console/traces.mdx`
  - What are traces?
  - Trace vs span
  - Trace collection from your app
  - Viewing traces in console
  - Filtering traces

- `console/trace-visualization.mdx`
  - Span chart / waterfall view
  - Timeline visualization
  - Performance metrics
  - Span details
  - Tool calls within spans
  - Duration analysis

- `console/span-chart.mdx`
  - Interactive waterfall diagram
  - Zoom and pan
  - Filtering by tool type
  - Exporting span data

#### **Analysis**
- `console/analysis.mdx`
  - What is analysis?
  - When analysis runs (automatic after verification)
  - Analysis engines
  - Viewing analysis results
  - Analysis status

- `console/findings.mdx`
  - What are findings?
  - Finding types (bugs, issues, warnings)
  - Severity levels
  - Findings list
  - Finding details
  - Root cause analysis

- `console/recommendations.mdx`
  - What are recommendations?
  - How recommendations are generated
  - Acting on recommendations
  - Recommendation types
  - Recommendation priority

#### **Dashboard**
- `console/dashboard.mdx`
  - Overview metrics
  - Key statistics
  - Trending data
  - Quick actions
  - Recent sessions

---

### 5️⃣ **User Management**
Target: Account/team owners

**Pages needed:**
- `account/profile.mdx`
  - View/edit profile
  - Avatar
  - Email
  - Password management

- `account/teams.mdx`
  - Team overview
  - Inviting team members
  - Managing roles
  - Removing members
  - Team permissions

- `account/settings.mdx`
  - Account settings
  - Email preferences
  - Notification settings
  - Integrations

---

### 6️⃣ **API Reference** (Optional)
Target: Developers integrating with IronBee backend

**Pages needed:**
- `api/authentication.mdx` - JWT auth, API keys
- `api/sessions.mdx` - Session endpoints
- `api/activities.mdx` - Activity endpoints
- `api/analysis.mdx` - Analysis endpoints

---

### 7️⃣ **Best Practices & Guides**
Target: Experienced users optimizing usage

**Pages needed:**
- `guides/best-practices.mdx`
- `guides/performance-optimization.mdx`
- `guides/debugging-failed-verifications.mdx`
- `guides/integrating-with-ci-cd.mdx`

---

## 📊 Proposed Mintlify docs.json Structure

```json
{
  "navigation": {
    "tabs": [
      {
        "tab": "Getting Started",
        "groups": [
          {
            "group": "Introduction",
            "icon": "rocket",
            "pages": [
              "getting-started/what-is-ironbee",
              "getting-started/quick-start",
              "getting-started/key-concepts"
            ]
          }
        ]
      },
      {
        "tab": "CLI",
        "groups": [
          {
            "group": "Setup",
            "icon": "gear",
            "pages": [
              "cli/installation",
              "cli/setup",
              "cli/configuration"
            ]
          },
          {
            "group": "Commands",
            "icon": "terminal",
            "pages": [
              "cli/commands",
              "cli/agent-commands"
            ]
          },
          {
            "group": "Help",
            "icon": "circle-question",
            "pages": [
              "cli/troubleshooting"
            ]
          }
        ]
      },
      {
        "tab": "GitHub Actions",
        "groups": [
          {
            "group": "Getting Started",
            "icon": "rocket",
            "pages": [
              "github-action/overview",
              "github-action/getting-started"
            ]
          },
          {
            "group": "Configuration",
            "icon": "gear",
            "pages": [
              "github-action/trigger-modes",
              "github-action/configuration",
              "github-action/authentication"
            ]
          },
          {
            "group": "Advanced",
            "icon": "sliders",
            "pages": [
              "github-action/evidence-artifacts",
              "github-action/outputs"
            ]
          }
        ]
      },
      {
        "tab": "Console",
        "groups": [
          {
            "group": "Core Concepts",
            "icon": "layers",
            "pages": [
              "console/projects",
              "console/sessions",
              "console/activities",
              "console/dashboard"
            ]
          },
          {
            "group": "Verification & Fixes",
            "icon": "check",
            "pages": [
              "console/verifications",
              "console/verification-detail",
              "console/fixes",
              "console/fix-detail"
            ]
          },
          {
            "group": "Data & Analysis",
            "icon": "chart-bar",
            "pages": [
              "console/traces",
              "console/trace-visualization",
              "console/span-chart",
              "console/analysis",
              "console/findings",
              "console/recommendations"
            ]
          }
        ]
      },
      {
        "tab": "Account & Team",
        "groups": [
          {
            "group": "Manage",
            "icon": "users",
            "pages": [
              "account/profile",
              "account/teams",
              "account/settings"
            ]
          }
        ]
      },
      {
        "tab": "Guides",
        "groups": [
          {
            "group": "Advanced Usage",
            "icon": "book",
            "pages": [
              "guides/best-practices",
              "guides/performance-optimization",
              "guides/debugging-failed-verifications",
              "guides/integrating-with-ci-cd"
            ]
          }
        ]
      }
    ]
  }
}
```

---

## 🎯 Content Priority

### Phase 1 (MVP - Essential for launch)
- Getting Started (3 pages)
- CLI Installation & Setup (3 pages)
- CLI Commands (2 pages)
- GitHub Actions Getting Started (2 pages)
- Console: Sessions, Verifications, Fixes (6 pages)

**Total: ~16 pages**

### Phase 2 (Important features)
- CLI Configuration & Troubleshooting (2 pages)
- GitHub Actions Advanced (2 pages)
- Console: Traces, Analysis, Findings (3 pages)
- Account & Team (3 pages)

**Total: ~10 pages**

### Phase 3 (Nice-to-have)
- API Reference (5 pages)
- Best Practices & Guides (4 pages)
- Dashboard & Activities (3 pages)

**Total: ~12 pages**

---

## 🔧 Content Patterns for Each Page

### Installation Page Pattern
- System requirements
- Install command (copy-paste)
- Verify installation
- Troubleshooting install errors

### Configuration Page Pattern
- Config file locations
- Example configurations
- Common settings explanation
- Validation

### Feature Page Pattern
- **What is X?** (definition)
- **Key concepts** (related terms)
- **How to use** (step-by-step)
- **Screenshots/examples**
- **Pro tips**
- **Related features** (links)

### Console Feature Page Pattern
- **Overview** - What this feature shows
- **How to access it** - Navigation path
- **Understanding the UI** - Sections, buttons, data
- **Common tasks** - How to filter, sort, export
- **Interpreting results** - What the data means
- **Related features** - Links to related docs

---

## 📸 Visual Assets Needed

For each major feature, consider including:
- Screenshot of the UI
- Annotated diagram explaining components
- Example data/results
- Video demo (for complex features like video playback)

Priority features for visuals:
1. Session detail page
2. Verification panel with video
3. Trace waterfall chart
4. CLI installation process
5. GitHub Action workflow

---

## ✍️ Writing Tips for External Customers

1. **Be concise** - Busy developers
2. **Show examples** - Code snippets, CLI commands, config samples
3. **Answer "why"** - Why would I use this feature?
4. **Show success paths AND errors** - What happens when it works and when it breaks
5. **Use consistent terminology** - Define key terms once, reuse throughout
6. **Link generously** - Help users discover related features
7. **Include troubleshooting** - Common mistakes, how to fix them
8. **Provide quick wins** - Make first experience rewarding

