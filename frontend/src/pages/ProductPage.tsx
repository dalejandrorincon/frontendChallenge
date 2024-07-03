import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/product/ProductDetails";
import { fetchItemDetails } from "../api/index";
import { Product } from "../types";

const ProductPage: React.FC = () => {
  const { id = "" } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await fetchItemDetails(id);
        const { item } = response;
        setProduct(item);
      } catch (error) {
        console.error("Failed to fetch items");
      }
    };

    fetchDetails();
  }, [id]);

  return (
    <>{product ? <ProductDetails product={product} /> : <p>Loading...</p>}</>
  );
};

export default ProductPage;
