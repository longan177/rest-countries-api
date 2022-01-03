import React, { useState, useEffect, useContext } from "react";
import Countrycard from "./Countrycard";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { CountryContext } from "../data";

function CountryContainer() {
  const [countries, isLoaded] = useContext(CountryContext);
  return isLoaded ? (
    <div className="country-container">
      {countries.map((country) => {
        return <Countrycard {...country} />;
      })}
    </div>
  ) : (
    <Loading />
  );
}

export default CountryContainer;
