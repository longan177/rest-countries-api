import React from "react";
import CountryContainer from "./Component/CountryContainer";
import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CountryInfo from "./Component/CountryInfo";

function MainComponent() {
  return (
    <Router>
      <React.Fragment>
        <header>
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:country" element={<CountryInfo />}></Route>
            </Routes>{" "}
          </main>
        </header>
      </React.Fragment>
    </Router>
  );
}

const Home = () => (
  <React.Fragment>
    <section>
      <Searchbar />
    </section>
    <article>
      <CountryContainer />
    </article>
  </React.Fragment>
);

export default MainComponent;
