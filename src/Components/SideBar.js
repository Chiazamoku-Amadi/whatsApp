import React from "react";
import Search from "./Search";
import { ReactComponent as Filter } from "../Assets/filter-icon.svg";

function SideBar() {
  return (
    <aside className="side-bar-header">
      <div className="side-bar-header-search">{<Search />}</div>
      <div className="side-bar-header-filter">
        <Filter />
      </div>
    </aside>
  );
}

export default SideBar;
