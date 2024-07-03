import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import SearchBox from "../search/SearchBox";
import styles from "./Layout.module.scss";
import GridContainer from "./GridContainer";

const Layout: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    navigate(`/items?search=${query}`);
  };

  return (
    <>
      <header className={styles.header} role="banner">
        <GridContainer>
          <SearchBox onSearch={handleSearch} />
        </GridContainer>
      </header>
      <main className={styles.main} role="main">
        <GridContainer>
          <Outlet />
        </GridContainer>
      </main>
    </>
  );
};

export default Layout;
