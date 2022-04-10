import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ListPage, ItemPage, AddItemPage } from 'pages';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="list" element={<ListPage />} />
          <Route path="list/:itemId" element={<ItemPage />} />

          <Route path="create" element={<AddItemPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
};
