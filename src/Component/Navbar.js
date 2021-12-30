import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <h1>Where in the world?</h1>
        <button className="d-flex">
          <FontAwesomeIcon className="moonIcon" icon={faMoon} />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
