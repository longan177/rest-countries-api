import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ButtonForBorder({ border }) {
  const url = "https://restcountries.com/v3.1/all";
  const [country, setCountry] = useState([]);
  const [hasButtonLoaded, sethasButtonLoaded] = useState(false);
  const getBorderCountry = country.find((country) => country.cca3 === border);
  console.log(getBorderCountry);
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
        console.log("success from button border!");
        setCountry(xhr.response);
        sethasButtonLoaded(true);
      } else {
        console.log("error", xhr);
      }
    };

    xhr.send();

    // some API require special authorization, that's when we use 'setRequestHeader'    xhr.send();
  }, []);

  return hasButtonLoaded ? (
    <Link to="/country-Malaysia">
      <button>{border}</button>
    </Link>
  ) : (
    <button>{border}</button>
  );
}

export default ButtonForBorder;
