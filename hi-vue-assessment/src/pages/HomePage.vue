<script setup>
import PlaceholderCard from '../components/PlaceholderCard.vue';

/**
 * Home Page
 *
 * TODO:
 * 1. Fetch data from your chosen API (see services/api.js)
 * 2. Display items in a grid or list using your own components
 * 3. Implement pagination or infinite scroll
 * 4. Add a search input with debouncing (see composables/useDebounce.js)
 * 5. Handle loading and error states
 * 6. Consider caching / memoisation for API responses
 * 7. Link each item to its Detail page using <RouterLink>
 */
</script>

<template>
  <div>
    <h2>Home</h2>
    <p>Replace this with your API-driven list. See the TODO comments above.</p>

    <!-- Example placeholders — remove and replace with your implementation -->
    <div class="grid">
      <PlaceholderCard title="Item 1" subtitle="Replace with real data" />
      <PlaceholderCard title="Item 2" subtitle="Replace with real data" />
      <PlaceholderCard title="Item 3" subtitle="Replace with real data" />
    </div>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}
</style>
