import React, { useState, useEffect, useContext } from "react";
import Countrycard from "./Countrycard";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { CountryContext } from "../data";

function CountryContainer() {
  const [countries, isLoaded, searchTerm, setSearchTerm, select, setselect] =
    useContext(CountryContext);
  return isLoaded ? (
    <div className="country-container">
      {countries
        .filter((country) => {
          if (select === "all" || select === "") {
            return country;
          } else if (select === country.region.toLowerCase()) {
            return country;
          }
        })
        .filter((country) => {
          if (searchTerm === "") {
            return country;
          } else if (
            country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return country;
          }
        })
        .map((country) => {
          return <Countrycard {...country} />;
        })}
    </div>
  ) : (
    <Loading />
  );
}

export default CountryContainer;
