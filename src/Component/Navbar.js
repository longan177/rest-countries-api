import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isDarkMode, setisDarkMode] = useState(false);

  const switchDarkMode = (variable, style) => {
    document.documentElement.style.setProperty(variable, style);
  };
  useEffect(() => {
    if (isDarkMode) {
      console.log("change to dark!");
      switchDarkMode("--clr-lightgray-light", "hsl(207, 26%, 17%)");
      switchDarkMode("--clr-color-white", "hsl(209, 23%, 22%)");
      switchDarkMode("--clr-darkblue-light", "hsl(0, 0%, 100%)");
    } else {
      console.log("change to light!");
      switchDarkMode("--clr-lightgray-light", "hsl(0, 0%, 98%");
      switchDarkMode("--clr-color-white", "white");
      switchDarkMode("--clr-darkblue-light", "hsl(200, 15%, 8%)");
    }
  }, [isDarkMode]);
  return (
    <nav className="nav">
      <div className="nav-container">
        <h1>Where in the world?</h1>
        <button onClick={() => setisDarkMode(!isDarkMode)} className="d-flex">
          <FontAwesomeIcon className="moonIcon" icon={faMoon} />
          Dark Mode
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
