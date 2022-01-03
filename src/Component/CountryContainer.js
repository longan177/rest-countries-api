import React, { useState, useEffect, useContext } from "react";
import Countrycard from "./Countrycard";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { CountryContext } from "../data";

function CountryContainer() {
  const [countries, isLoaded, searchTerm, setSearchTerm] =
    useContext(CountryContext);
  return isLoaded ? (
    <div className="country-container">
      {countries
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
