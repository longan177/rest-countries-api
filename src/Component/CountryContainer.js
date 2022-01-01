import React, { useState, useEffect } from "react";
import Countrycard from "./Countrycard";
import Loading from "./Loading";

function CountryContainer() {
  const url = "https://restcountries.com/v3.1/all";
  const url2 = "https://jsonplaceholder.typicode.com/posts";
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  function compare(a, b) {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  }

  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
        console.log("success");
        setCountries(xhr.response.sort(compare));
        setIsLoaded(true);
      } else {
        console.log("error", xhr);
      }
    };

    xhr.send();

    // some API require special authorization, that's when we use 'setRequestHeader'    xhr.send();
  }, []);
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
