import "./App.css";
import WordLetterCounter from "./WordLetterCounter";

function App() {
  return (
    <>
      <div className="App">
        <h1
          id="top"
          style={{
            fontFamily: "Arial, sans-serif",
            fontSize: "100px"
          }}
        >
          Pirated project
        </h1>
        <h1>Word & letter counter</h1>
        <WordLetterCounter />
      </div>
    </>
  );
}

export default App;
