<h1 align="center">Maksym Herasymenko</h1>

<p align="center"><b>Senior Backend Engineer</b> · Java · Spring Boot · distributed systems</p>

<p align="center">
  <a href="https://maksym.site"><img alt="Website" src="https://img.shields.io/badge/maksym.site-1F4E79?style=flat-square&logo=googlechrome&logoColor=white"></a>
  <a href="https://www.linkedin.com/in/herasymenko"><img alt="LinkedIn" src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white"></a>
  <a href="https://maksym.site/cv.pdf"><img alt="CV" src="https://img.shields.io/badge/CV-PDF-555555?style=flat-square"></a>
</p>

---

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

- **[maksym.site](https://maksym.site)** ([source](https://github.com/maksymhs/maksymhs.github.io)): my site, open source. Static pages on GitHub Pages and a Cloudflare Worker that serves the "Ask my CV" assistant, the contact form and the MCP server.
- **[Public MCP server](https://maksym.site/#mcp)**: my profile as a Model Context Protocol server, so your AI assistant can read my experience, evaluate my fit for a role or send me a message. No sign-up, no API key.
  ```bash
  claude mcp add --transport http maksym https://api.maksym.site/mcp
  ```
- **[Radar](https://maksym.site/radar/)**: daily backend, cloud and fintech picks with commentary, drafted with AI assistance and published automatically by a scheduled routine. [RSS](https://maksym.site/radar/feed.xml).

### Latest from the radar

<!-- radar:start -->
- [Multi-agent systems need boundaries, tests and traces](https://maksym.site/radar/2026-10-08/) · 8 Oct 2026
- [Grab halves p99 latency by redesigning its counter storage](https://maksym.site/radar/2026-10-07/) · 7 Oct 2026
- [OpenTelemetry's Kubernetes processor hits 1.0, with renames to plan for](https://maksym.site/radar/2026-10-06/) · 6 Oct 2026
- [AWS treats digital sovereignty as an architecture question](https://maksym.site/radar/2026-10-05/) · 5 Oct 2026
- [Cloudflare Traces puts the whole request path in one trace](https://maksym.site/radar/2026-10-02/) · 2 Oct 2026
<!-- radar:end -->

### Contact

[Contact form](https://maksym.site/#contact) · [Book a 20-minute call](https://calendly.com/maksymhe) · [LinkedIn](https://www.linkedin.com/in/herasymenko)
