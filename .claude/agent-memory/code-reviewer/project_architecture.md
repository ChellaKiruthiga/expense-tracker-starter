---
name: project-architecture
description: Core architectural decisions and known smells in the expense tracker SPA
metadata:
  type: project
---

Single-page React 19 app (Vite). No routing, no external state library, no persistence.

Component tree: App -> Summary, TransactionForm, TransactionList, SpendingChart.
App owns `transactions` array and `handleAdd`/`handleDelete` callbacks.

**Known architectural smell**: `categories` array is hardcoded and duplicated in both TransactionForm.jsx and TransactionList.jsx. Should be extracted to a shared constants file (e.g., src/constants.js).

**Data model**: `{ id, description, amount, type, category, date }` — `amount` is always a number (parseFloat on input). `id` is generated via `Date.now()` in TransactionForm.

**Seed data bug**: Transaction id:4 ("Freelance Work") is typed as `expense` but categorized as `salary` — likely a data entry error in the seed.

**Why:** This is a learning/starter project; architecture decisions favor simplicity over scalability.
**How to apply:** Do not suggest routing, persistence, or state management libraries unless explicitly asked. Flag the categories duplication on every review.
