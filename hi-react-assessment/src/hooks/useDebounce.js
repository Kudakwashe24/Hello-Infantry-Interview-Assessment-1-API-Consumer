import { useState, useEffect } from 'react';

/**
 * useDebounce Hook
 *
 * Delays updating the returned value until the user stops changing it
 * for the specified delay.
 */
export function useDebounce(value, delay = 400) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [value, delay]);

  return debouncedValue;
}