import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WordLetterCounter from "./WordLetterCounter";

function App() {

  return (
    <>
      <div className="App">
        <h1 id="top">Pirated project</h1>
        <h1>Word & letter counter</h1>
        <WordLetterCounter />
      </div>
    </>
  );
}

export default App;
