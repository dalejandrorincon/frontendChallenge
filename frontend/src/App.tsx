import React from "react";
import { Route, Routes } from "react-router-dom";
import ItemsPage from "./pages/ItemsPage";
import Layout from "./components/layout/Layout";
import ProductPage from "./pages/ProductPage";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="items" element={<ItemsPage />} />
        <Route path="items/:id" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
