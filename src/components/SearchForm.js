import React from "react";
//search form runs the handleSearchChange function when its input form changes
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