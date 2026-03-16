<script setup>
/**
 * PlaceholderCard component — replace this with your own card/list item component.
 *
 * Performance hints:
 * - Use v-once for content that never changes after mount
 * - Use v-memo to skip re-renders when props haven't changed
 * - Images should use loading="lazy" or Intersection Observer
 * - Consider using <KeepAlive> for caching component instances
 * - Use shallowRef / shallowReactive when deep reactivity isn't needed
 */

defineProps({
  title: {
    type: String,
    default: 'Item Title',
  },
  subtitle: {
    type: String,
    default: 'Subtitle',
  },
});
</script>

<template>
  <div class="placeholder-card">
    <div class="placeholder-image" />
    <div class="placeholder-content">
      <h3>{{ title }}</h3>
      <p>{{ subtitle }}</p>
    </div>
  </div>
</template>

<style scoped>
.placeholder-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
  transition: box-shadow 0.2s ease;
}

.placeholder-card:hover {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.placeholder-image {
  width: 100%;
  height: 180px;
  background: #e0e0e0;
}

.placeholder-content {
  padding: 1rem;
}

.placeholder-content h3 {
  margin-bottom: 0.5rem;
}

.placeholder-content p {
  color: #666;
  font-size: 0.9rem;
}
</style>
