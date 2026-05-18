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

Single-page React app (Vite + React 19). All application logic lives in `src/App.jsx` — there are no sub-components, no routing, and no external state library.

**Data model:** transactions are held in a single `useState` array. Each transaction has `{ id, description, amount, type, category, date }`. `amount` is stored as a string (not a number), which causes the income/expense summary totals to concatenate instead of add — a known intentional bug introduced for the course.

**Categories** are a hardcoded array in `App.jsx`: `["food", "housing", "utilities", "transport", "entertainment", "salary", "other"]`.

**Filtering** is done inline in the render: `filteredTransactions` is derived from the `transactions` array by applying `filterType` and `filterCategory` state values.

There is no persistence layer — data resets on page reload.
