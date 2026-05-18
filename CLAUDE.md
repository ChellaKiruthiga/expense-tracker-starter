# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm install      # install dependencies (required before first run)
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build
npm run lint     # run ESLint
npm run preview  # preview production build
```

## Architecture

Single-page React app (Vite + React 19). No routing, no external state library.

**Component tree:**
- `App` — holds the `transactions` array in state and an `handleAdd` callback; renders the three children below
  - `Summary` — receives `transactions`, computes `totalIncome`, `totalExpenses`, and `balance` internally
  - `TransactionForm` — owns its own form field state (`description`, `amount`, `type`, `category`); calls `onAdd` with a fully-formed transaction object on submit
  - `TransactionList` — receives `transactions`, owns its own `filterType` / `filterCategory` state, derives the filtered list internally

**Data model:** each transaction has `{ id, description, amount, type, category, date }` where `amount` is a number. New transactions added via the form are parsed with `parseFloat`.

**Categories** are a hardcoded constant array duplicated in `TransactionForm` and `TransactionList`: `["food", "housing", "utilities", "transport", "entertainment", "salary", "other"]`.

There is no persistence layer — data resets on page reload.
