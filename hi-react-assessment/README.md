# Open Library Book Explorer

A React application built for the Hello Infantry frontend assessment.

## Features

- Searchable book list powered by the Open Library API
- Debounced search input
- Paginated results
- Detail page for individual books
- Simple in-memory caching for list and detail requests
- Lazy-loaded routes and images
- Loading, error, and empty states
- Responsive layout

## Approach

I chose the Open Library API because it allowed me to demonstrate search, pagination, caching, and performance-focused frontend behaviour clearly.

The app uses:
- `React.lazy()` and `Suspense` for route-based code splitting
- a custom `useDebounce` hook to reduce unnecessary API requests
- lightweight in-memory caching in the API service
- `useMemo` and `useCallback` where helpful to reduce unnecessary work

## Running locally

```bash
npm install
npm run dev