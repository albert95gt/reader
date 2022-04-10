import axios from 'axios';
import { useState, useEffect } from 'react';
axios.defaults.baseURL = 'https://61e9af6e7bc0550017bc6417.mockapi.io';

export const getPublications = async () => {
  const response = await axios.get('/publications');
  return response.data;
};
export const useFetchItems = () => {
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
export const getPublicationById = async id => {
  const response = await axios.get(`/publications/${id}`);
  return response.data;
};

export const addPublication = async data => {
  const response = await axios.post('/publications', data);
  return response.data;
};

export const deletePublication = async id => {
  const response = await axios.delete(`/publications/${id}`);
  return response.data;
};
