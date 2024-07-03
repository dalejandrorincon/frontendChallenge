import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchItems } from "../api";
import { Product } from "../types";
import ProductList from "../components/product/ProductList";
import Breadcrumb from "components/breadCrumb/BreadCrumb";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ItemsPage: React.FC = () => {
  const query = useQuery().get("search") || "";
  const [products, setProducts] = useState<Product[]>([]);
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetchItems(query);
        const { items, categories } = response;
        setBreadcrumbItems(categories);
        setProducts(items);
      } catch (error) {
        console.error("Failed to fetch items");
      }
    };

    if (query) {
      fetchResults();
    }
  }, [query]);

  const handleSelect = (id: string) => {
    navigate(`/items/${id}`);
  };
  return (
    <>
      <Breadcrumb items={breadcrumbItems} />
      <ProductList products={products} onSelect={handleSelect} />
    </>
  );
};

export default ItemsPage;
