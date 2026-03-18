import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { fetchItemById } from '../services/api';

function Detail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    async function loadBookDetail() {
      try {
        setLoading(true);
        setError('');

        const data = await fetchItemById(id, controller.signal);
        setBook(data);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong while fetching the book details.');
        }
      } finally {
        setLoading(false);
      }
    }

    loadBookDetail();

    return () => controller.abort();
  }, [id]);

  if (loading) {
    return <div className="status-message">Loading book details...</div>;
  }

  if (error) {
    return (
      <div className="detail-page">
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
        <div className="status-message error-message">{error}</div>
      </div>
    );
  }

  if (!book) {
    return (
      <div className="detail-page">
        <Link to="/" className="back-link">
          ← Back to home
        </Link>
        <div className="status-message">No book details found.</div>
      </div>
    );
  }

  return (
    <section className="detail-page">
      <Link to="/" className="back-link">
        ← Back to home
      </Link>

      <div className="detail-card">
        <div className="detail-cover-wrapper">
          {book.coverUrl ? (
            <img
              src={book.coverUrl}
              alt={`Cover of ${book.title}`}
              className="detail-cover"
              loading="lazy"
            />
          ) : (
            <div className="detail-cover-placeholder">No cover available</div>
          )}
        </div>

        <div className="detail-content">
          <h2>{book.title}</h2>
          <p>{book.description}</p>

          {book.subjects?.length > 0 && (
            <div className="subject-list">
              <h3>Subjects</h3>
              <div className="subject-tags">
                {book.subjects.map((subject) => (
                  <span key={subject} className="subject-tag">
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Detail;