import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPublications } from '../services/publicationsApi';

const useFetchItems = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      setLoading(true);
      try {
        const items = await getPublications();
        setItems(items);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchItems();
  }, []);
  return { items, loading, error };
};

export const ListPage = () => {
  const { items, loading, error } = useFetchItems();
  return (
    <main>
      <h1>List items</h1>
      {loading && <p>Loading...</p>}
      {!error && (
        <ul>
          {items.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/list/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
};
