import MainComponent from "./MainComponent";
import { CountryProvider } from "./data";

function App() {
  return (
    <div>
      <CountryProvider>
        <MainComponent />
      </CountryProvider>
    </div>
  );
}

export default App;
