import React from "react";
import { ReactComponent as SearchIcon } from "../Assets/search-icon.svg";

function Search({ searchQuery, value }) {
  return (
    <div className="search-bar">
      <label htmlFor="header-search">
        <SearchIcon />
      </label>
      <input
        type="text"
        value={value}
        placeholder="Search or start new chat"
        onChange={searchQuery}
      />
    </div>
  );
}

export default Search;
