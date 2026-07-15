# Architecture

Version: 1.0
Status: Frozen

# Purpose

This document defines the technical architecture of Krishna's Knowledge Journal.

The architecture exists to support the Knowledge Model. Technology must never dictate how knowledge is organized.

---

# Technology Stack

Framework
- Astro

Language
- TypeScript (default Astro configuration)

Content
- Markdown

Version Control
- Git

Repository Hosting
- GitHub

Deployment
- Cloudflare Pages

---

# Core Principles

- Static-first architecture.
- Minimal dependencies.
- Content-driven development.
- Reusable components.
- Long-term maintainability.

---

# Project Structure

```
Krishna-Knowledge-Journal/

README.md

docs/

public/

src/

content/

astro.config.mjs

package.json
```

---

# src Structure

```
src/

components/

layouts/

pages/

styles/

utils/
```

---

# content Structure

```
content/

articles/

drafts/
```

Articles contain published Markdown.

Drafts contain unpublished work.

---

# public Structure

```
public/

images/

favicon/

robots.txt
```

---

# Components

Reusable UI only.

Initial components:

- Header
- Footer
- Navigation
- Hero
- ArticleCard
- Breadcrumb
- Pagination

Components must never contain business logic.

---

# Layouts

Initial layouts:

- BaseLayout
- PageLayout
- ArticleLayout

Layouts define structure.

Pages provide content.

---

# Routing

Astro file-based routing.

Initial routes:

/

/about

/articles

/contact

Future routes:

/articles/[slug]

/topics/[topic]

---

# Styling

Plain CSS.

CSS Variables.

No Tailwind.

No Bootstrap.

No CSS frameworks.

---

# Images

Images are stored inside:

public/images/

Each article has its own image folder when necessary.

---

# Dependencies

Every dependency must satisfy all of the following:

- Solves a present problem.
- Reduces maintenance.
- Improves simplicity.
- Fits the Constitution.

Otherwise it is rejected.

---

# Build Philosophy

The website should compile into static HTML.

Client-side JavaScript should only be added when absolutely necessary.

---

# Future Enhancements

These are intentionally deferred.

- Search
- Dark Mode
- Related Articles Automation
- Reading Progress
- RSS Improvements
- Interactive Visualizations

They are not part of Version 1.

---

# Architectural Rule

Architecture changes only between milestones.

Implementation must never redefine architecture.