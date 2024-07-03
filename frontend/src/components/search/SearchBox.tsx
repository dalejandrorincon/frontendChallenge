import React, { useState } from "react";
import styles from "./SearchBox.module.scss";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}
const SearchBox: React.FC<SearchBoxProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      const formattedQuery = trimmedQuery.replace(/\s+/g, "-");
      onSearch(formattedQuery);
    }
  };

  return (
    <div className={styles.searchBoxContainer}>
      <div className={styles.searchBox}>
        <img src="/Logo_ML.png" alt="ML Logo" className={styles.logo} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Nunca dejes de buscar"
          aria-label="Search"
          className={styles.inputSearch}
        />
        <button className={styles.searchButton} onClick={handleSearch}>
          <img src="/ic_Search.png" alt="search button" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
