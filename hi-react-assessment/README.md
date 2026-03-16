# Hello Infantry — React Developer Assessment

## Overview

Build a **React** application that consumes a public API and displays the data with a focus on **performance and optimisation**. This assessment evaluates how you handle real-world frontend challenges — not just "does it work", but "does it work _well_".

## Getting Started

1. **Fork** this repository
2. Clone your fork locally
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the dev server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173)

## The Task

Choose a public API from the suggestions below (or bring your own — any free, no-auth API works) and build:

1. **Home page** (`/`) — displays a searchable, paginated list of items fetched from the API
2. **Detail page** (`/detail/:id`) — displays the full details of a selected item

### Suggested APIs

| API | URL | Notes |
|-----|-----|-------|
| REST Countries | `https://restcountries.com/v3.1/all` | 250 items in one call — forces client-side pagination |
| PokeAPI | `https://pokeapi.co/api/v2/pokemon` | 1,350+ items with offset/limit pagination, nested fetches for details |
| Open Library | `https://openlibrary.org/search.json?q=` | Search-driven, large result sets — tests debouncing |

## Evaluation Criteria

### Primary — Performance & Optimisation

Your submission will be evaluated on the following:

1. **Pagination or infinite scroll** — handle large datasets without rendering everything at once
2. **Lazy loading** — images, components, and/or routes should load on demand
3. **Caching / memoisation** — avoid redundant API calls and unnecessary re-computation
4. **Debounced search** — search inputs should not fire a request on every keystroke
5. **Code splitting** — use `React.lazy()` and dynamic `import()` to split your bundle
6. **Minimal re-renders** — use `React.memo`, `useMemo`, `useCallback` where appropriate

### Secondary

- Clean, readable code
- Sensible component structure
- Error handling and loading states
- Responsive layout
- TypeScript usage (optional, but appreciated)

## Project Structure

```
src/
├── main.jsx              # Entry point
├── App.jsx               # Routes + Suspense wrapper
├── App.css               # Global styles
├── components/
│   ├── Placeholder.jsx   # Starter component — replace with your own
│   └── Placeholder.css
├── pages/
│   ├── Home.jsx          # Home page — TODO comments inside
│   └── Detail.jsx        # Detail page — TODO comments inside
├── services/
│   └── api.js            # API stubs — implement your API calls here
├── hooks/
│   └── useDebounce.js    # Debounce hook stub — implement this
└── utils/
    └── .gitkeep          # Add any utility functions here
```

## Rules

- **No UI component libraries** (no Material UI, Ant Design, Chakra, etc.) — we want to see _your_ components and CSS
- **Minimal packages** — you may add an HTTP client (e.g., axios) or a small utility library, but avoid heavy dependencies
- **TypeScript is optional** — use it if you're comfortable, but it won't count against you if you don't
- **Time limit** — to be communicated separately

## Submission

1. Push your completed work to your forked repository
2. Share the fork URL with us

## Questions?

If anything is unclear, reach out to your contact at Hello Infantry.
