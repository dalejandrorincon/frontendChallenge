import React from "react";
import styles from "./GridContainer.module.scss";

interface GridContainerProps {
  children: React.ReactNode;
}

const GridContainer: React.FC<GridContainerProps> = ({ children }) => {
  return <div className={styles.gridContainer}>{children}</div>;
};

export default GridContainer;
