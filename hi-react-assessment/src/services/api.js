const BASE_SEARCH_URL = 'https://openlibrary.org/search.json';
const BASE_WORK_URL = 'https://openlibrary.org';

const listCache = new Map();
const detailCache = new Map();

function buildCoverUrl(coverId) {
  if (!coverId) return null;
  return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;
}

function mapSearchResult(book) {
  return {
    id: book.key?.replace('/works/', '') || '',
    title: book.title || 'Untitled',
    author: book.author_name?.[0] || 'Unknown author',
    year: book.first_publish_year || 'N/A',
    coverUrl: buildCoverUrl(book.cover_i),
  };
}

export async function fetchItems(params = {}) {
  const {
    query = 'javascript',
    page = 1,
    limit = 12,
    signal,
  } = params;

  const trimmedQuery = query.trim() || 'javascript';
  const cacheKey = `${trimmedQuery}-${page}-${limit}`;

  // Keep this simple so repeated searches don't hit the API again
  if (listCache.has(cacheKey)) {
    return listCache.get(cacheKey);
  }

  const url = `${BASE_SEARCH_URL}?q=${encodeURIComponent(trimmedQuery)}&page=${page}&limit=${limit}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error('Failed to fetch books. Please try again.');
  }

  const data = await response.json();

  const result = {
    items: (data.docs || []).map(mapSearchResult),
    total: data.numFound || 0,
    page,
    limit,
  };

  listCache.set(cacheKey, result);

  return result;
}

export async function fetchItemById(id, signal) {
  if (!id) {
    throw new Error('No item ID provided.');
  }

  if (detailCache.has(id)) {
    return detailCache.get(id);
  }

  const response = await fetch(`${BASE_WORK_URL}/works/${id}.json`, { signal });

  if (!response.ok) {
    throw new Error('Failed to fetch book details. Please try again.');
  }

  const data = await response.json();

  const result = {
    id,
    title: data.title || 'Untitled',
    description:
      typeof data.description === 'string'
        ? data.description
        : data.description?.value || 'No description available.',
    subjects: data.subjects?.slice(0, 8) || [],
    coverUrl: buildCoverUrl(data.covers?.[0]),
  };

  detailCache.set(id, result);

  return result;
}