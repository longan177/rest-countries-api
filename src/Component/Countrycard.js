import React from "react";
import { Link } from "react-router-dom";

function Countrycard({ name, population, region, capital, flags }) {
  const buttonstyle = {
    padding: "0.35rem 0.7rem",
    border: "none",
    display: "block",
    margin: "0 auto",
    background: "hsl(200,100%,50%)",
    color: "white",
    borderRadius: "10px",
  };
  return (
    <div className="country-card">
      <div className="country-flag-container">
        <img src={flags.png}></img>
      </div>
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
        <Link to="/country-info">
          <button style={buttonstyle}>See more info</button>
        </Link>
      </article>
    </div>
  );
}

export default Countrycard;
