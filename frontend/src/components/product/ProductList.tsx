import React from "react";
import ProductItem from "./ProductItem";
import { Product } from "../../types";
import styles from "./ProductList.module.scss";

interface ProductListProps {
  products: Array<Product>;
  onSelect: (id: string) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, onSelect }) => {
  return (
    <ul className={styles.productList}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} onSelect={onSelect} />
      ))}
    </ul>
  );
};

export default ProductList;
