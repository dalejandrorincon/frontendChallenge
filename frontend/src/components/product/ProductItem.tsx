import React from "react";
import { Product } from "../../types";
import styles from "./ProductItem.module.scss";
import { formatPrice } from "../../utils/formatPrice";

interface ProductItemProps {
  product: Product;
  onSelect: (id: string) => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onSelect }) => {
  const { id, title, picture, price, free_shipping = false } = product;
  return (
    <li className={styles.productItem} onClick={() => onSelect(id)}>
      <div className={styles.productContainer}>
        <div className={styles.productImage}>
          <img src={picture} alt={title} />
        </div>
        <div className={styles.productInfo}>
          <div className={styles.productPriceContainer}>
            <span className={styles.productPrice}>{formatPrice(price)}</span>
            {free_shipping && (
              <img
                src="/ic_shipping.png"
                alt="Free Shipping"
                className={styles.freeShippingIcon}
              />
            )}
          </div>
          <h2 className={styles.productTitle}>{title}</h2>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
