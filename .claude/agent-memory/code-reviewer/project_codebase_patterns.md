---
name: project-codebase-patterns
description: Naming conventions, CSS approach, and recurring patterns observed in the codebase
metadata:
  type: project
---

**Handler naming**: `handleAdd`, `handleDelete` — verb + noun, camelCase. Prop names match: `onAdd`, `onDelete`.

**CSS approach**: Single dark-theme design system in index.css (CSS custom properties: --bg, --surface, --surface-2, --surface-3, --border, --text-primary, --text-secondary, --text-muted, --income, --expense, --gold, --radius, --radius-lg). Component styles live in App.css. No CSS modules or CSS-in-JS.

**Global table styles**: `table`, `th`, `td` rules are unscoped in App.css — will affect any table added anywhere in the app.

**Inline style objects in recharts**: SpendingChart passes large inline style objects to Tooltip contentStyle/labelStyle/itemStyle — these recreate on every render but are inside a charting library so impact is negligible.

**Form pattern**: TransactionForm uses controlled components with local useState for each field, resets on submit.

**Filter pattern**: TransactionList owns filterType/filterCategory state and derives filtered list inline (no useMemo).

**Category badge pattern**: CSS classes follow BEM-like `category-badge--{category}` — tightly coupled to the hardcoded category list.

**`window.confirm` for delete**: Used in TransactionList for delete confirmation — blocks the main thread, not accessible, should be replaced with an inline confirmation pattern.
