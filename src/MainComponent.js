import React from "react";
import CountryContainer from "./Component/CountryContainer";
import Navbar from "./Component/Navbar";
import Searchbar from "./Component/Searchbar";

function MainComponent() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          <Searchbar />
        </section>
        <article>
          <CountryContainer />
        </article>
      </main>
    </React.Fragment>
  );
}

export default MainComponent;
