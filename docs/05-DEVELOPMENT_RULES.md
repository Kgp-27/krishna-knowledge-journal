# Development Rules

Version: 1.0
Status: Active

# Purpose

These rules define how Krishna's Knowledge Journal is developed and maintained.

Every contribution to the project must follow these rules.

---

# Rule 1 — Follow the Constitution

The Constitution is the highest authority in this project.

If any implementation conflicts with the Constitution, the Constitution takes precedence.

---

# Rule 2 — Architecture First

Architecture is designed before implementation.

Architecture may only change between milestones.

Never redesign while implementing.

---

# Rule 3 — One Milestone, One Objective

Every milestone has a single objective.

If additional work is discovered during implementation, it belongs to a future milestone.

---

# Rule 4 — Working Project

Every milestone must end with:

- A working project
- No known broken functionality
- Successful local build
- Git commit
- GitHub push

---

# Rule 5 — Git Workflow

Every meaningful change follows this sequence:

1. Implement
2. Test
3. Review
4. Commit
5. Push

Commit prefixes:

- docs:
- feat:
- fix:
- refactor:
- style:
- chore:

Commit messages should be short, clear, and descriptive.

---

# Rule 6 — Simplicity

Always prefer the simplest solution that satisfies the current requirement.

Avoid unnecessary abstractions.

Avoid premature optimization.

---

# Rule 7 — Dependencies

Every dependency must:

- Solve a present problem.
- Reduce maintenance.
- Be actively maintained.
- Be easy to remove if necessary.

If a dependency cannot justify itself, do not add it.

---

# Rule 8 — Documentation

Every architectural decision must be documented.

Documentation is part of the project—not an afterthought.

Keep documentation synchronized with implementation.

---

# Rule 9 — Content

Content is the project's primary asset.

Technology exists to publish content.

Never sacrifice content quality for technical complexity.

---

# Rule 10 — Code Quality

Code should be:

- Readable
- Consistent
- Reusable
- Well-organized
- Easy to maintain

Write code for future readability, not cleverness.

---

# Rule 11 — CSS

Use plain CSS.

Use CSS variables.

Avoid unnecessary frameworks.

Keep styling modular and predictable.

---

# Rule 12 — Components

Components should have a single responsibility.

Reuse components rather than duplicating markup.

Avoid business logic inside UI components.

---

# Rule 13 — Testing

Before every commit:

- Verify the project builds.
- Check for console errors.
- Verify navigation.
- Verify responsive layout.
- Verify affected functionality.

Never commit knowingly broken code.

---

# Rule 14 — Scope Control

New features must answer:

- What problem does this solve?
- Why is it needed now?
- Is there a simpler solution?
- What maintenance cost does it introduce?

If these questions cannot be answered, postpone the feature.

---

# Rule 15 — Long-Term Maintainability

Every implementation decision should assume:

- One primary maintainer.
- Long project lifespan.
- Continuous content growth.
- Minimal maintenance burden.

Maintainability is more important than novelty.

---

# Definition of Done

A task is complete only when:

- Implementation is finished.
- The project works correctly.
- Documentation is updated if required.
- Changes are committed.
- Changes are pushed to GitHub.