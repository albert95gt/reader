import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Publication } from 'components/Publication';
import {
  getPublicationById,
  deletePublication,
} from 'services/publicationsApi';
import { FaArrowLeft } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const ItemPage = () => {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const { itemId } = useParams();
  const navigate = useNavigate();

  const deleteItem = async () => {
    try {
      setIsDeleting(true);
      await deletePublication(itemId);
      toast.success('Publication has delete!');
    } catch (error) {
    } finally {
      setIsDeleting(false);
      navigate('/list');
    }
  };

  useEffect(() => {
    async function getItemById() {
      setIsLoading(true);
      try {
        const item = await getPublicationById(itemId);
        setItem(item);
      } catch (error) {
        toast.error('Publication not found!!!');
      } finally {
        setIsLoading(false);
      }
    }
    getItemById();
  }, [itemId]);

  return (
    <main>
      <Link to="/list">
        <FaArrowLeft />
        Go back
      </Link>
      {isLoading && <p>Loading...</p>}
      {item && (
        <>
          <hr />
          <button type="button" onClick={deleteItem} disabled={isDeleting}>
            Delete publication
          </button>
          <hr />
          <Publication item={item} />
        </>
      )}
    </main>
  );
};
