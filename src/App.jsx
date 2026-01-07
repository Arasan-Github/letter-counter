import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <h1 id="top">Pirated project</h1>
        <h1>Word & letter counter</h1>
      </div>
    </>
  );
}

export default App;
