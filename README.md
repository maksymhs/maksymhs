<h1 align="center">Maksym</h1>

<p align="center"><b>Senior Backend Engineer</b> · Java · Spring Boot · distributed systems<br>Building <a href="https://maksym.site/citadel/">Citadel</a>, a command center for AI coding agents</p>

<p align="center">
  <a href="https://maksym.site"><img alt="Website" src="https://img.shields.io/badge/maksym.site-1F4E79?style=flat-square&logo=googlechrome&logoColor=white"></a>
  <a href="https://maksym.site/citadel/"><img alt="Citadel" src="https://img.shields.io/badge/Citadel-open%20source-b4441b?style=flat-square&logo=github&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/herasymenko"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white"></a>
</p>

---

### Featured

**[Citadel](https://maksym.site/citadel/)**: my open-source command center for projects, persistent terminals and AI coding agents. Self-hosted, MIT, runs on 512 MB of RAM. [Landing](https://maksym.site/citadel/) · [Source](https://github.com/maksymhs/Citadel)

### Now

Building the backend for Openbank's launch in Germany (Grupo Santander): Java and Spring Boot services, event-driven communication on AWS SQS, and AI-assisted internal tooling (an MCP server and agents) to trace onboarding flows across microservices and logs.

### Selected work

- **Simyo** (Paradigma Digital): full backend revamp of the highest-rated telco app in Spain (4.8 Play Store / 4.7 App Store). Aggregation endpoints that removed redundant CRM calls made API responses 2x faster.
- **MVC to hexagonal architecture**: led the migration of a large codebase so teams could evolve subsystems independently without breaking contracts.
- **Observability from scratch**: AOP instrumentation on Spring proxies feeding anomaly detection in Kibana, plus Grafana dashboards and alerting that reduced mean time to detection.
- **Banco Santander** (Experis): microservices bridging Spring Boot with legacy COBOL mainframe transactions, with Hystrix circuit breakers under high concurrency.

### Stack

- **Backend:** Java, Spring Boot, Spring MVC, Spring Security, Spring Data, Spring AOP, Hibernate
- **Architecture:** microservices, event-driven, hexagonal / clean architecture, REST API design, resilience patterns
- **Cloud and data:** AWS (SQS, CloudWatch), Google Cloud, OpenShift, Docker, PostgreSQL, Redis, Oracle
- **Observability:** Grafana, Kibana, Spring Boot Actuator
- **Delivery and quality:** Jenkins, GitLab CI, Maven, Gradle, SonarQube, JUnit, Selenium
- **AI-assisted engineering:** MCP servers, LLM agents for internal tooling

### Projects

- **[Citadel](https://maksym.site/citadel/)** ([source](https://github.com/maksymhs/Citadel), MIT): open-source, self-hosted command center for projects, terminals and AI coding agents. Persistent tmux terminals that survive closing the browser, a launcher for Claude Code, Codex CLI, OpenCode and others, an AES-256-GCM credential vault, machines paired by QR code, health alerts and a task mesh with an MCP server. Node.js, Fastify and SQLite; runs on 512 MB of RAM. Install: `curl -fsSL https://raw.githubusercontent.com/maksymhs/Citadel/main/install.sh | bash`.
- **[maksym.site](https://maksym.site)** ([source](https://github.com/maksymhs/maksymhs.github.io)): my site, open source: a hub, an About page and the Citadel landing. Static pages on GitHub Pages and a Cloudflare Worker that serves the "Ask me" assistant, the contact form and the MCP server.
- **[Talk to me from your own AI](https://maksym.site/about/#mcp)**: your assistant answers as me, in the first person and based only on my profile, and says it is an AI. One click opens it in Claude or ChatGPT, with no setup. Or add my public MCP server (`https://api.maksym.site/mcp`, no sign-up, no API key) as a connector in Claude (Settings → Connectors → Add custom connector), Cursor, Windsurf or VS Code and use `/talk_to_maksym`. For Claude Code: `claude mcp add --transport http maksym https://api.maksym.site/mcp`.
- **[Radar](https://maksym.site/radar/)**: daily backend, cloud and fintech picks with commentary, drafted with AI assistance and published automatically by a scheduled routine. [RSS](https://maksym.site/radar/feed.xml).

### Latest from the radar

<!-- radar:start -->
- [Google's Gemini 4 Argon optimizes ADK codebase with 40% session overhead reduction](https://maksym.site/radar/2026-10-25-google-gemini-4-argon-optimizes-adk-codebase-40-session-overhead/) · 25 Oct 2026
- [OpenAI says it will no longer train its AI models on the live internet, citing “signifi...](https://maksym.site/radar/2026-10-24-openai-says-will-no-longer-train-ai-models-live-internet-citing/) · 24 Oct 2026
- [Agent Skills standard donated to the Agentic AI Foundation](https://maksym.site/radar/2026-10-23-agent-skills-standard-donated-agentic-ai-foundation/) · 23 Oct 2026
- [JEP 543 makes structured concurrency final in JDK 28](https://maksym.site/radar/2026-10-22-jep-543-makes-structured-concurrency-final-jdk-28/) · 22 Oct 2026
- [OpenAI agents disabled their own safety monitors and lied about it](https://maksym.site/radar/2026-10-21-openai-agents-disabled-their-own-safety-monitors-lied-about/) · 21 Oct 2026
<!-- radar:end -->

### Contact

[Contact form](https://maksym.site/about/#contact) · [Book a 20-minute call](https://calendly.com/maksymhe) · [LinkedIn](https://www.linkedin.com/in/herasymenko)
