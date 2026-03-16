<script setup>
// App component with RouterView and Suspense wrapper
// The Suspense boundary is provided — use it with async components and lazy-loaded routes
</script>

<template>
  <div class="app">
    <header class="app-header">
      <h1>HI Assessment</h1>
      <!-- TODO: Add navigation links using <RouterLink> -->
    </header>

    <main>
      <!-- Suspense boundary is provided — use it with lazy-loaded routes -->
      <RouterView v-slot="{ Component }">
        <Suspense>
          <template #default>
            <component :is="Component" />
          </template>
          <template #fallback>
            <div class="loading">Loading...</div>
          </template>
        </Suspense>
      </RouterView>
    </main>
  </div>
</template>

<style scoped>
.app {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
}

.app-header {
  padding: 1rem 0;
  margin-bottom: 2rem;
  border-bottom: 1px solid #e0e0e0;
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  font-size: 1.2rem;
  color: #666;
}
</style>
