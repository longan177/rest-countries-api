import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { CountryContext } from "../data";
import Loading from "./Loading";
// import ButtonForBorder from "./ButtonForBorder";

function CountryInfo() {
  const countryList = [];
  const [Allcountry] = useContext(CountryContext);
  const params = useParams();
  const currentCountry = params.country.replace("country-", "");
  const empty = "Error haha";
  const url = `https://restcountries.com/v2/name/${currentCountry}`;
  const [countries, setCountries] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [country, setcountry] = useState([]);
  useEffect(() => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      if (xhr.status == 200) {
        console.log("success");
        setcountry(xhr.response);
        setIsLoaded(true);
      } else {
        console.log("error", xhr);
      }
    };

    xhr.send();

    // some API require special authorization, that's when we use 'setRequestHeader'    xhr.send();
  }, []);

  return !isLoaded ? (
    <Loading />
  ) : (
    country.map((country) => <CountryDetail {...country} />)
  );
}

export default CountryInfo;

// const [

// ] = getCountry;

const CountryDetail = ({
  name: { common },
  flags,
  capital,
  population,
  region,
  subregion,
  languages,
  currencies,
  nativeName,
  borders,
  topLevelDomain,
}) => {
  const empty = "unknown";

  return (
    <div className="info-container">
      <Link to="/">
        <button>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </Link>
      <div className="country-detail-container">
        <div className="country-frag">
          <img src={flags.svg} />
        </div>
        <div className="country-detail">
          <h3>{nativeName}</h3>
          <div className="detail">
            <div className="data">
              <h4>
                Native Name : <span>{nativeName}</span>
              </h4>
              <h4>
                Population : <span>{population}</span>
              </h4>
              <h4>
                Region : <span>{region}</span>
              </h4>
              <h4>
                Sub Region : <span>{subregion}</span>
              </h4>
              <h4>
                Capital: <span>{capital || ""}</span>
              </h4>
            </div>
            <div className="data">
              <h4>
                Top Level Domain : <span>{topLevelDomain}</span>
              </h4>
              <h4>
                Curriencies :{" "}
                <span>
                  {currencies
                    ? currencies
                        .map(
                          (currency) =>
                            `${currency.name} ( ${currency.symbol} )`
                        )
                        .join(", ")
                    : "not provided!"}
                </span>
              </h4>
              <h4>
                Languages :{" "}
                <span>{languages.map((language) => language.name)}</span>
              </h4>
            </div>
          </div>
          <div className="country-border ">
            <h3>Border Countries: </h3>

            <div className="country-border-button">
              {borders
                ? borders.map((border) => (
                    <button style={{ cursor: "initial" }}>{border}</button>
                  ))
                : "No border country."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
