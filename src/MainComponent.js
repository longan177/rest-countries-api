import React from "react";
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
      </main>
    </React.Fragment>
  );
}

export default MainComponent;
