import React, { useState } from "react";
import "./SearchBar.scss";

const SearchBar = ({ onChange }) => {
  const [value, setValue] = useState("");

  return (
    <div className="search-bar">
      <label className="search-bar__label" htmlFor="search">
        Search a particular item:
      </label>
      <br />
      <input
        className="search-bar__input"
        autoComplete="off"
        type="text"
        id="search"
        placeholder="e.g. Bundesliga"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
