import { Link } from 'react-router-dom';
import { useFetchItems } from '../services/publicationsApi';

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
