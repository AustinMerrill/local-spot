import React from "react";
import submitSearch from "../../assets/images/search.png";
function SearchBar() {
  return (
    <div className="search-bar">
      <form>
        <input
          className="input-search"
          type="text"
          placeholder="City Name"
        ></input>
        <button>
          <img className="submit-search" src={submitSearch} alt="search"></img>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
