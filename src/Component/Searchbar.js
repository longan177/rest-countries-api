import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CountryContext } from "../data";

function Searchbar() {
  const [, , searchTerm, setSearchTerm, select, setselect] =
    useContext(CountryContext);

  console.log(searchTerm);

  return (
    <div className="search-container">
      <div className="search-input d-flex">
        <label for="search-country">
          <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
        </label>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-country"
          id="search-country"
          placeholder="Search for a country.."
        />
      </div>{" "}
      <div className="search-input select-wrapper">
        <select
          onChange={(e) => setselect(e.target.value)}
          value={select}
          className="search-region"
          name="search-region"
          id="search-region"
        >
          <option selected disabled>
            Filter by Region
          </option>
          <option value="all">All</option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Searchbar;
