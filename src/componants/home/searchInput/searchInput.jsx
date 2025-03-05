import React from "react";
import "./searchInput.css";
import searchIcon from "../../../assets/navbar/search_icon.svg";

import { useState } from "react";

function SearchInput() {
  const [clicked, setClicked] = useState(false);

  function searchBar() {
    setClicked(!clicked);
  }

  return (
    <>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search Movies..."
          className="inputArea"
        />
        <img
          src={searchIcon}
          alt="Search Icon"
          className="search-icon"
          onClick={searchBar}
        />
      </div>
    </>
  );
}

export default SearchInput;
