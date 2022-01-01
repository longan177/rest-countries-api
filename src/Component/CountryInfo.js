import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CountryInfo() {
  const url = "https://flagcdn.com/w320/be.png";
  const url2 = "https://flagcdn.com/sg.svg";

  return (
    <div className="info-container">
      <Link to="/">
        <button>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
      </Link>
      <div className="country-detail-container">
        <div className="country-frag">
          <img src={url2} />
        </div>
        <div className="country-detail">
          <h3>Belgium</h3>
          <div className="detail">
            <div className="data">
              <h4>
                Native Name : <span>Belgie</span>
              </h4>
              <h4>
                Population : <span>Belgie</span>
              </h4>
              <h4>
                Region : <span>Belgie</span>
              </h4>
              <h4>
                Sub Region : <span>Belgie</span>
              </h4>
              <h4>
                Capital: <span>Belgie</span>
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
                Languages : <span>Belgie</span>
              </h4>
            </div>
          </div>
          <div className="country-border ">
            <h3>Border Countries: </h3>

            <div className="country-border-button">
              <button>France</button>
              <button>France</button>
              <button>France</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
