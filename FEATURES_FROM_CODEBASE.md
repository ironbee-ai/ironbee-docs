# IronBee Codebase Features Analysis for Documentation

## 📋 Genel Bakış

IronBee is a **multi-tier AI-powered platform** composed of:
- **Frontend**: React/TypeScript web console with rich UI components (Radix UI)
- **Backend APIs**: Express.js REST services for account/team management
- **AI Engine**: Claude Agent SDK with sandboxed execution
- **Data Pipeline**: Java-based collectors, ingesters, and data processing
- **Infrastructure**: AWS CDK (TypeScript) for IaC management
- **Authentication**: AWS Cognito + GitHub OAuth

---

## 🎯 JavaScript/TypeScript Applications (app/js/)

### 1. **Console Frontend** (`ironbee-console-frontend`)
**What it does:** Web-based user interface for the entire platform

**Key Features to Document:**
- ✅ **Dashboard/Analytics Views** - Charts, metrics, real-time data visualization
  - Uses: `@nivo/pie`, `@visx/axis`, `@visx/group` for charting
  - Document: "Creating Custom Dashboards", "Interpreting Metrics"
  
- ✅ **Project Management** - Create, organize, and manage projects
  - Document: "Project Setup", "Project Settings"
  
- ✅ **Team Collaboration UI** - Invite members, assign roles, team workspace
  - Document: "Team Management from UI", "Role-Based Access Control"
  
- ✅ **Real-time Notifications** - Toast notifications, alerts
  - Tech: `@radix-ui/react-toast`
  - Document: "Understanding Notifications"
  
- ✅ **Rich Forms & Dialogs** - User input, configuration
  - Tech: Radix UI form components
  - Document: "Configuring Settings Through UI"
  
- ✅ **Dark Mode Support** - Theme switching
  - Document: "Preferences & Appearance"

---

### 2. **Console Backend API** (`ironbee-console-backend`)
**What it does:** REST API for console operations (account, team, invitations)

**API Endpoints to Document:**
- 🔑 **Authentication**
  - AWS Cognito integration
  - JWT verification with `aws-jwt-verify`
  - Document: "API Authentication", "JWT Token Usage"

- 👥 **Account Management**
  - User profile management
  - Document: "Managing Your Account", "Profile Settings"

- 👨‍💼 **Team Management**
  - Member invite/accept workflow
  - Role assignments
  - Document: "Inviting Team Members", "Managing Team Roles"

- 📧 **Email Notifications**
  - Uses AWS SES for invitations, confirmations
  - Document: "Email Notifications & Settings"

- 📁 **File Management**
  - S3 integration for file storage
  - Pre-signed URLs for uploads/downloads
  - Document: "Uploading Files", "File Access Control"

- 📊 **API Documentation**
  - OpenAPI/Swagger available via Scalar
  - Document: "API Reference", "Integration Guide"

---

### 3. **AI Agent Lambda** (`ironbee-ai-agent`)
**What it does:** Sandboxed AI execution environment using Claude Agent SDK

**Features to Document:**
- 🤖 **Agent Execution**
  - Runs Claude agents with tool use
  - Sandboxed with `isolated-vm`
  - Document: "Running AI Analysis", "Agent Capabilities"

- 🔧 **Tool Integration**
  - Custom tools available to agents
  - Document: "Available Tools for Analysis"

- 📊 **Execution Results**
  - Analysis outputs and recommendations
  - Document: "Understanding AI Analysis Results"

- 🔐 **Sandboxing & Security**
  - Isolated execution environment
  - Document: "How AI Execution is Secured"

---

### 4. **Analyzer** (`ironbee-analyzer`)
**What it does:** Orchestrates per-project analysis and recommendations

**Features to Document:**
- 📈 **Analysis Workflows**
  - Orchestrator + worker Lambda pattern
  - Document: "How Analysis Works", "Analysis Workflow"

- 🎯 **Project Analysis**
  - Per-project recommendations
  - Quality metrics, issues, suggestions
  - Document: "Project Analysis Results", "Acting on Recommendations"

- ⏱️ **Scheduled Analysis**
  - Automatic periodic analysis
  - Document: "Scheduling Analysis Runs"

---

### 5. **Authentication Manager** (`ironbee-auth-manager`)
**What it does:** Cognito event handlers for authentication lifecycle

**Features to Document:**
- 🔐 **Authentication Flow**
  - Pre-signup validation
  - Post-confirmation actions
  - Pre-token generation (claims customization)
  - Post-authentication logging
  - Document: "How Authentication Works", "Auth Events"

- 📝 **Sign-up Process**
  - Email verification
  - Custom validation rules
  - Document: "Creating an Account", "Email Verification"

- 🎫 **JWT Tokens**
  - Token generation with custom claims
  - Document: "Token Structure", "Token Claims"

---

### 6. **Auth OIDC Provider** (`ironbee-auth-oidc-provider`)
**What it does:** GitHub OAuth as OIDC provider integration

**Features to Document:**
- 🐙 **GitHub OAuth**
  - Login with GitHub account
  - GitHub profile sync
  - Document: "Logging in with GitHub", "GitHub Account Linking"

- 🔗 **OAuth Flow**
  - OAuth authorization code flow
  - Automatic account creation
  - Document: "OAuth Authentication Flow"

---

### 7. **Infra Module** (`ironbee-infra`)
**What it does:** Shared infrastructure clients (database, cache)

**Technical Documentation:**
- 🗄️ **Database Client**
  - PostgreSQL connection pooling
  - Document: "Database Configuration", "Connection Management"

- 🔴 **Cache Client**
  - Redis integration via Redisson
  - Caching strategies
  - Document: "Caching Strategy"

---

### 8. **Domain Module** (`ironbee-domain`)
**What it does:** Shared data models and types

**Documentation:**
- 📊 **Core Entities**
  - Projects, Teams, Users, Accounts
  - Document: "Data Model Overview"

- 🎯 **Events & Recommendations**
  - Analysis results structure
  - Document: "Understanding Data Structures"

---

### 9. **Tools CLI** (`ironbee-tools`)
**What it does:** Operational CLI tool for administrators

**Features to Document:**
- 🖥️ **Command Line Interface**
  - Admin commands for operations
  - Database management
  - Document: "Admin CLI Guide", "Common Admin Tasks"

---

## ☕ Java Applications (app/java/)

### 1. **Collector** (`ironbee-collector`)
**What it does:** Spring Boot web app for trace & event ingestion

**Features to Document:**
- 📥 **Trace Collection**
  - HTTP endpoints to collect application traces
  - Trace storage in PostgreSQL
  - Document: "Sending Traces to IronBee", "Trace Collection API"

- 📊 **Event Ingestion**
  - Application events collection
  - Real-time processing
  - Document: "Sending Events", "Event Format"

- 🔐 **Authentication**
  - API key or JWT-based access
  - Rate limiting
  - Document: "Securing Your Trace Collection"

- 📈 **Performance Metrics**
  - Trace aggregation
  - Performance statistics
  - Document: "Performance Metrics Overview"

---

### 2. **Ingester Lambda** (`ironbee-ingester`)
**What it does:** Serverless ingestion from SQS/Kinesis streams

**Features to Document:**
- 🔄 **Stream Processing**
  - Processes traces from event queues
  - High-volume ingestion
  - Document: "Understanding Data Pipelines"

- 🔀 **Data Transformation**
  - Normalizes incoming data
  - Document: "Data Transformation Process"

- 💾 **Persistence**
  - Stores to PostgreSQL
  - Redis caching
  - Document: "Data Storage & Retention"

---

### 3. **Service Layer** (`ironbee-service`)
**What it does:** Business logic for data processing and analysis

**Features to Document:**
- 🧮 **Analysis Engines**
  - Quality analysis
  - Performance analysis
  - Recommendations generation
  - Document: "How Analysis Works", "Analysis Algorithms"

- 📊 **Aggregations & Reports**
  - Time-series aggregations
  - Report generation
  - Document: "Generating Reports"

- 🔍 **Search & Query**
  - Find traces, events by filters
  - Document: "Searching & Filtering Data"

---

### 4. **Repository Layer** (`ironbee-repository`)
**What it does:** PostgreSQL data access layer

**Technical Documentation:**
- 🗄️ **Database Schema**
  - Tables, relationships
  - Document: "Database Schema Overview"

- 🔎 **Query Patterns**
  - Common queries, indexes
  - Document: "Database Query Optimization"

---

### 5. **Domain** (`ironbee-domain`)
**What it does:** Shared Java entities and types

**Documentation:**
- 📦 **Core Entities**
  - Trace, Event, Recommendation types
  - Document: "Java Domain Models"

---

## 🏗️ Infrastructure (infra/)

### AWS CDK Infrastructure (`infra/platform/`)
**Technology:** TypeScript, AWS CDK

**Features to Document:**

#### **Core Stack**
- 🌐 **VPC & Networking**
  - Virtual Private Cloud setup
  - Security groups, subnets
  - Document: "Network Architecture"

- 🗄️ **Aurora PostgreSQL**
  - Multi-AZ database
  - Backup strategy
  - Document: "Database Setup & Maintenance"

- 🔴 **Redis**
  - Cache layer
  - Session storage
  - Document: "Cache Configuration"

- 🪣 **S3 Storage**
  - File uploads, artifact storage
  - Document: "File Storage Configuration"

- ⚖️ **Elastic Load Balancer**
  - Traffic distribution
  - High availability
  - Document: "Load Balancing Setup"

- 🔐 **Cognito Auth**
  - User authentication
  - OAuth providers
  - Document: "Setting Up Cognito"

- 📊 **CloudWatch Alarms**
  - Monitoring, alerting
  - Document: "Monitoring & Alerts"

#### **Domain Stack**
- 📨 **Event Processing**
  - SQS queues, SNS topics
  - Lambda triggers
  - Document: "Event Architecture"

- 📡 **Telemetry Pipeline**
  - Metrics collection
  - Document: "Telemetry Collection"

- 🎁 **Artifact Storage**
  - S3 for analysis artifacts
  - Document: "Artifact Management"

---

## 📚 Suggested Mintlify Documentation Structure

```
docs/
├── platform/
│   ├── quickstart.mdx (existing)
│   ├── key-concepts.mdx (existing)
│   ├── architecture.mdx ⭐ NEW
│   ├── data-collection/
│   │   ├── overview.mdx ⭐ NEW
│   │   ├── trace-api.mdx ⭐ NEW
│   │   ├── event-api.mdx ⭐ NEW
│   │   ├── sdk-integration.mdx ⭐ NEW
│   │   └── authentication.mdx ⭐ NEW
│   ├── analysis/
│   │   ├── overview.mdx ⭐ NEW
│   │   ├── understanding-results.mdx ⭐ NEW
│   │   ├── recommendations.mdx ⭐ NEW
│   │   └── scheduling.mdx ⭐ NEW
│   ├── console/
│   │   ├── dashboard.mdx ⭐ NEW
│   │   ├── projects.mdx ⭐ NEW
│   │   ├── search-filter.mdx ⭐ NEW
│   │   └── preferences.mdx ⭐ NEW
│   ├── configuration/ (existing)
│   │   ├── settings.mdx (existing)
│   │   ├── user-management.mdx (existing)
│   │   ├── authentication-setup.mdx ⭐ NEW
│   │   ├── github-oauth.mdx ⭐ NEW
│   │   └── api-keys.mdx ⭐ NEW
│   └── administration/ (existing)
│       ├── roles-permissions.mdx (existing)
│       └── team-management.mdx ⭐ NEW
├── api-reference/ ⭐ NEW SECTION
│   ├── overview.mdx ⭐ NEW
│   ├── authentication.mdx ⭐ NEW
│   ├── account/
│   │   ├── get-profile.mdx ⭐ NEW
│   │   └── update-profile.mdx ⭐ NEW
│   ├── teams/
│   │   ├── list-members.mdx ⭐ NEW
│   │   ├── invite-member.mdx ⭐ NEW
│   │   └── manage-roles.mdx ⭐ NEW
│   └── traces/
│       ├── submit-trace.mdx ⭐ NEW
│       ├── query-traces.mdx ⭐ NEW
│       └── batch-submit.mdx ⭐ NEW
├── analytics/ (existing - could be enhanced)
│   ├── quickstart.mdx (existing)
│   ├── connect-data.mdx (existing)
│   ├── dashboards/ (existing)
│   └── reports/ (existing)
├── integrations/ (existing - could be enhanced)
│   ├── quickstart.mdx (existing)
│   ├── authentication.mdx (existing)
│   ├── connectors/ (existing)
│   └── webhooks/ (existing)
└── deployment/ ⭐ NEW SECTION
    ├── infrastructure-as-code.mdx ⭐ NEW
    ├── aws-setup.mdx ⭐ NEW
    ├── environments.mdx ⭐ NEW
    ├── monitoring.mdx ⭐ NEW
    └── troubleshooting.mdx ⭐ NEW
```

---

## 🎯 Priority Documentation Topics

### **High Priority** (Core Platform Features)
1. **Architecture Overview** - How all components fit together
2. **Data Collection** - How to send traces/events to IronBee
3. **Analysis Results** - Understanding what the AI analysis produces
4. **Authentication** - Cognito setup, GitHub OAuth, API keys
5. **Team Management** - Inviting members, roles, permissions
6. **Console Features** - Dashboard, projects, search

### **Medium Priority** (Advanced Features)
7. **REST API Reference** - Full endpoint documentation
8. **AI Agent Capabilities** - What the agent can do
9. **Scheduled Analysis** - Setting up recurring analysis
10. **File Upload/Storage** - Managing files in IronBee

### **Lower Priority** (Admin/Advanced)
11. **Infrastructure as Code** - AWS CDK setup
12. **CLI Administration** - Admin commands
13. **Performance Optimization** - Database tuning, caching
14. **Custom Integrations** - Webhooks, custom tools

---

## 📝 Documentation Writing Ideas

### Quick-Start Guides
- "Your First Trace" - Send your first trace in 5 minutes
- "Setting Up Your Team" - Invite first team member
- "Understanding Your Analysis" - Read your first analysis report

### How-To Guides
- "How to Integrate IronBee into Your Application"
- "How to Set Up GitHub OAuth"
- "How to Schedule Daily Analysis"
- "How to Create Custom Dashboards"

### API Documentation
- Complete OpenAPI spec (using Scalar from console-backend)
- Code examples for common operations
- Webhook documentation

### Conceptual Guides
- "Understanding IronBee Architecture"
- "The Data Pipeline: From Trace to Insight"
- "How AI Analysis Works"
- "Security & Data Privacy in IronBee"

---

## ✨ Sample Documentation to Add First

**Recommend starting with these 3-5 documents:**

1. **Architecture.mdx** - 10-15 min read
   - Diagram of all major components
   - Data flow overview
   - Technology stack

2. **Data Collection API.mdx** - 15 min read
   - How to integrate Collector API
   - Request/response examples
   - Authentication setup

3. **Authentication Setup.mdx** - 15 min read
   - GitHub OAuth configuration
   - Cognito setup
   - API key generation

4. **Understanding Analysis Results.mdx** - 10 min read
   - What the analyzer produces
   - How to read recommendations
   - Acting on insights

5. **API Reference Overview.mdx** - 5 min read
   - Link to interactive Swagger docs
   - Common endpoints summary

---

## 🔗 Reference Information

### Existing Source Code References
- **Frontend Components**: `/Users/sbarman/ws/ironbee/app/js/ironbee-console-frontend`
- **Backend APIs**: `/Users/sbarman/ws/ironbee/app/js/ironbee-console-backend`
- **Java Backends**: `/Users/sbarman/ws/ironbee/app/java/`
- **Infrastructure**: `/Users/sbarman/ws/ironbee/infra/platform/`

### Tech Stack Summary
- **Frontend**: React 19, TypeScript, Vite, Radix UI, Redux
- **Backend (JS)**: Express.js, TypeScript, AWS SDK
- **Backend (Java)**: Spring Boot 3.5, PostgreSQL, Redis, AWS SDK
- **Infrastructure**: AWS CDK, TypeScript
- **Authentication**: AWS Cognito, OAuth 2.0
- **AI**: Claude Agent SDK, sandboxed execution
- **Database**: PostgreSQL (Aurora)
- **Cache**: Redis (via Redisson)
- **Monitoring**: CloudWatch

