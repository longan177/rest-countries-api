import React from "react";

function Countrycard({ name, population, region, capital, flags }) {
  return (
    <div className="country-card">
      <img src={flags.png}></img>
      <article>
        <h3>{name.common}</h3>
        <h4>
          Population: <span>{population}</span>
        </h4>
        <h4>
          Region: <span>{region}</span>
        </h4>
        <h4>
          Capital: <span>{capital}</span>
        </h4>
      </article>
    </div>
  );
}

export default Countrycard;
