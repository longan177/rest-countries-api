import React from "react";
import CountryContainer from "./Component/CountryContainer";
import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function MainComponent() {
  return (
    <Router>
      <React.Fragment>
        <header>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </React.Fragment>
    </Router>
  );
}

const Home = () => (
  <main>
    <section>
      <Searchbar />
    </section>
    <article>
      <CountryContainer />
    </article>
  </main>
);

export default MainComponent;
