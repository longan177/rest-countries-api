import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { CountryContext } from "../data";

function CountryInfo() {
  const [countries, isLoaded] = useContext(CountryContext);
  const url = "https://flagcdn.com/w320/be.png";
  const url2 = "https://flagcdn.com/sg.svg";
  const params = useParams();
  const currentCountry = params.country.replace("country-", "");
  const getCountry = countries.find(
    (country) => country.name.common === currentCountry
  );

  const {
    flags,
    capital,
    population,
    region,
    subregion,
    languages,
    currencies,
    nativeName,
  } = getCountry;

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
          <h3>{currentCountry}</h3>
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
                Capital: <span>{capital}</span>
              </h4>
            </div>
            <div className="data">
              <h4>
                Top Level Domain : <span>Belgie</span>
              </h4>
              <h4>
                Curriencies : <span>Belgie</span>
              </h4>
              <h4>
                Languages : <span>{languages.children}</span>
              </h4>
            </div>
          </div>
          <div className="country-border ">
            <h3>Border Countries: </h3>

            <div className="country-border-button">
              {getCountry.borders
                ? getCountry.borders.map((border) => <button>{border}</button>)
                : "No border country."}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
