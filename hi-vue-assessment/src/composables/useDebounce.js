import { ref, watch } from 'vue';

/**
 * useDebounce Composable
 *
 * TODO: Implement a debounce composable that delays updating the returned ref
 * until after the specified delay has elapsed since the last change.
 *
 * Usage example:
 *   const search = ref('');
 *   const debouncedSearch = useDebounce(search, 300);
 *
 *   watch(debouncedSearch, (value) => {
 *     // This runs only after the user stops typing for 300ms
 *     fetchResults(value);
 *   });
 *
 * @param {import('vue').Ref} value - The reactive ref to debounce
 * @param {number} delay - Delay in milliseconds
 * @returns {import('vue').Ref} The debounced value as a ref
 */
export function useDebounce(value, delay = 300) {
  // TODO: Implement this composable
  // Hint: You'll need ref() and watch()
  // Hint: Don't forget to clean up the timeout in the watch cleanup
  const debouncedValue = ref(value.value);

  // Currently updates immediately — no debouncing
  watch(value, (newVal) => {
    debouncedValue.value = newVal;
  });

  return debouncedValue;
}
