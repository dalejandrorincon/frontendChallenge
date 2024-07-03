import React from "react";
import { Product } from "../../types";
import styles from "./ProductDetails.module.scss";

import { formatPrice } from "../../utils/formatPrice";
import Button from "components/common/Button";
import GridContainer from "components/layout/GridContainer";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { condition, title, description, picture, price } = product;

  return (
    <div className={styles.productContainer}>
      <GridContainer>
        <div className={styles.productImage}>
          <img src={picture} alt={product.title} />
        </div>
        <div className={styles.productInfo}>
          <span className={styles.productCondition}>{condition}</span>
          <h1 className={styles.productTitle}>{title}</h1>
          <span className={styles.productPrice}>{formatPrice(price)}</span>
          <Button onClick={() => console.log("handleClick")} text="Comprar" />
        </div>
        <div className={styles.descriptionWrapper}>
          <h2>Descripción del producto</h2>
          <p className={styles.productDescription}>{description}</p>
        </div>
      </GridContainer>
    </div>
  );
};

export default ProductDetails;
