import Placeholder from '../components/Placeholder';

/**
 * Home Page
 *
 * TODO:
 * 1. Fetch data from your chosen API (see services/api.js)
 * 2. Display items in a grid or list using your own components
 * 3. Implement pagination or infinite scroll
 * 4. Add a search input with debouncing (see hooks/useDebounce.js)
 * 5. Handle loading and error states
 * 6. Consider caching / memoisation for API responses
 * 7. Link each item to its Detail page
 */
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Replace this with your API-driven list. See the TODO comments above.</p>

      {/* Example placeholder — remove and replace with your implementation */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem', marginTop: '1rem' }}>
        <Placeholder title="Item 1" subtitle="Replace with real data" />
        <Placeholder title="Item 2" subtitle="Replace with real data" />
        <Placeholder title="Item 3" subtitle="Replace with real data" />
      </div>
    </div>
  );
}

export default Home;
