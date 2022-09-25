import React from "react";
import { ReactComponent as SearchIcon } from "../Assets/search-icon.svg";

function Search() {
  return (
    <div className="search-bar">
      <label htmlFor="header-search">
        <SearchIcon />
      </label>
      <input type="text" placeholder="Search or start new chat" />
    </div>
  );
}

export default Search;
