import "./App.css";
import { Main } from "./components/Main";

import { Results } from "./components/Results";

function App() {
  return (
    <>
      <div className="main-container">
        <Main />
        <Results />
      </div>
    </>
  );
}

export default App;
