import { useState, useEffect } from 'react';

/**
 * useDebounce Hook
 *
 * TODO: Implement a debounce hook that delays updating the returned value
 * until after the specified delay has elapsed since the last change.
 *
 * Usage example:
 *   const [search, setSearch] = useState('');
 *   const debouncedSearch = useDebounce(search, 300);
 *
 *   useEffect(() => {
 *     // This runs only after the user stops typing for 300ms
 *     fetchResults(debouncedSearch);
 *   }, [debouncedSearch]);
 *
 * @param {any} value - The value to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {any} The debounced value
 */
export function useDebounce(value, delay = 300) {
  // TODO: Implement this hook
  // Hint: You'll need useState and useEffect
  // Hint: Don't forget to clean up the timeout
  return value; // Currently returns immediately — no debouncing
}
