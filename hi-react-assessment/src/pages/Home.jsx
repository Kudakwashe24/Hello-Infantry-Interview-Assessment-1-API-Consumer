import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchItems } from '../services/api';
import { useDebounce } from '../hooks/useDebounce';

const ITEMS_PER_PAGE = 12;

function Home() {
  const [search, setSearch] = useState('javascript');
  const [page, setPage] = useState(1);
  const [books, setBooks] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const debouncedSearch = useDebounce(search, 400);

  useEffect(() => {
    // Reset back to page 1 when the search term changes
    setPage(1);
  }, [debouncedSearch]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBooks() {
      try {
        setLoading(true);
        setError('');

        const data = await fetchItems({
          query: debouncedSearch,
          page,
          limit: ITEMS_PER_PAGE,
          signal: controller.signal,
        });

        setBooks(data.items);
        setTotalItems(data.total);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong while fetching books.');
        }
      } finally {
        setLoading(false);
      }
    }

    loadBooks();

    return () => controller.abort();
  }, [debouncedSearch, page]);

  const totalPages = useMemo(() => {
    return Math.max(1, Math.ceil(totalItems / ITEMS_PER_PAGE));
  }, [totalItems]);

  const handleSearchChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const handlePreviousPage = useCallback(() => {
    setPage((currentPage) => Math.max(1, currentPage - 1));
  }, []);

  const handleNextPage = useCallback(() => {
    setPage((currentPage) => Math.min(totalPages, currentPage + 1));
  }, [totalPages]);

  const resultSummary = useMemo(() => {
    if (!totalItems) return 'No results found.';
    return `Showing page ${page} of ${totalPages} · ${totalItems.toLocaleString()} results`;
  }, [page, totalPages, totalItems]);

  return (
    <section className="home-page">
      <div className="page-heading">
        <h2>Book Search</h2>
        <p>Search Open Library titles and explore book details.</p>
      </div>

      <div className="search-bar">
        <label htmlFor="search" className="search-label">
          Search books
        </label>
        <input
          id="search"
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Try Harry Potter, JavaScript, Design..."
        />
      </div>

      <div className="results-toolbar">
        <p>{resultSummary}</p>
      </div>

      {loading && <div className="status-message">Loading books...</div>}

      {!loading && error && <div className="status-message error-message">{error}</div>}

      {!loading && !error && books.length === 0 && (
        <div className="status-message">No books matched your search.</div>
      )}

      {!loading && !error && books.length > 0 && (
        <div className="books-grid">
          {books.map((book) => (
            <article key={book.id} className="book-card">
              <div className="book-cover-wrapper">
                {book.coverUrl ? (
                  <img
                    src={book.coverUrl}
                    alt={`Cover of ${book.title}`}
                    className="book-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="book-cover-placeholder">No cover available</div>
                )}
              </div>

              <div className="book-card-content">
                <h3>{book.title}</h3>
                <p>{book.author}</p>
                <p>First published: {book.year}</p>

                <Link to={`/detail/${book.id}`} className="detail-link">
                  View details
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      {!loading && !error && books.length > 0 && (
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={page === 1}>
            Previous
          </button>

          <span>
            Page {page} of {totalPages}
          </span>

          <button onClick={handleNextPage} disabled={page >= totalPages}>
            Next
          </button>
        </div>
      )}
    </section>
  );
}

export default Home;