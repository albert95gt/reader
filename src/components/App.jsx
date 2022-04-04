import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { ListPage } from 'pages';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/reader" element={<Layout />}>
          <Route path="preview" element={<div>Preview</div>} />
          <Route path="list" element={<ListPage />} />
          <Route path="list/:itemId" element={<h2>Single item Page</h2>} />

          <Route path="create" element={<div>Create</div>} />
        </Route>
      </Routes>
    </>
  );
};
