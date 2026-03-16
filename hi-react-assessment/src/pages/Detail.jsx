import { useParams } from 'react-router-dom';

/**
 * Detail Page
 *
 * TODO:
 * 1. Extract the item ID from the URL using useParams()
 * 2. Fetch the individual item's details from your API
 * 3. Display the item's full information
 * 4. Handle loading and error states
 * 5. Add a back/home navigation link
 * 6. Consider caching the fetched detail
 */
function Detail() {
  const { id } = useParams();

  return (
    <div>
      <h2>Detail Page</h2>
      <p>Viewing item: <strong>{id}</strong></p>
      <p>Replace this with the full detail view for the selected item.</p>
    </div>
  );
}

export default Detail;
