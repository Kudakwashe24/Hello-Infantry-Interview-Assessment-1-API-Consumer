/**
 * API Service
 *
 * Implement your API calls here. You may use fetch, axios, or any HTTP client.
 *
 * Suggested APIs (pick one or bring your own):
 * - REST Countries: https://restcountries.com/v3.1/all
 * - PokeAPI: https://pokeapi.co/api/v2/pokemon
 * - Open Library: https://openlibrary.org/search.json?q=
 *
 * Tips:
 * - Consider caching responses to avoid redundant network requests
 * - Handle errors gracefully
 * - Think about request cancellation for search-as-you-type
 */

/**
 * Fetch a list of items from the API.
 * @param {object} params - Query parameters (e.g., page, limit, search query)
 * @returns {Promise<Array>} List of items
 */
export async function fetchItems(params = {}) {
  throw new Error('Not implemented — replace this with your API call');
}

/**
 * Fetch a single item's details by ID.
 * @param {string|number} id - The item identifier
 * @returns {Promise<object>} Item details
 */
export async function fetchItemById(id) {
  throw new Error('Not implemented — replace this with your API call');
}
