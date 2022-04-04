import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Publication } from 'components/Publication';
import { getPublicationById } from 'services/publicationsApi';

export const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { itemId } = useParams();
  useEffect(() => {
    async function getItemById() {
      setIsLoading(true);
      try {
        const item = await getPublicationById(itemId);
        setItem(item);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    }
    getItemById();
  }, [itemId]);

  return (
    <main>
      {isLoading && <p>Loading...</p>}
      {item && <Publication item={item} />}
    </main>
  );
};
