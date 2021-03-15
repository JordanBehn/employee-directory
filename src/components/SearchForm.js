import React from "react";

function SearchForm({ handleSearchChange }) {
  return (
    <div className="search">
      <form className="form-inline">
        <input
          className="form-control"
          type="search"
          placeholder="Search Employee Directory"
          aria-label="Search"
          onChange={e => handleSearchChange(e)}
        />
      </form>
    </div>
  );
}
export default SearchForm;