import React from "react";
import styles from "./BreadCrumb.module.scss";

interface BreadcrumbProps {
  items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumb}>
      {items.map((item, index) => (
        <span
          key={item}
          className={`${styles.breadcrumbItem} ${
            index === items.length - 1 ? styles.lastBreadcrumb : ""
          }`}
        >
          <span className={styles.breadcrumbLabel}>{item}</span>
          {index < items.length - 1 && (
            <span className={styles.separator}>›</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;
