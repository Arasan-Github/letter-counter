import React, { useState } from "react";
import "./WordLetterCounter.css";

function WordLetterCounter() {
  const [text, setText] = useState("");
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  const letterCount = text.length;

  const handleTextChange = (e) => {
    setText(e.target.value);
  };
  console.log("from word letter counter")
  return (
    <div className="container">
      <textarea
        name="text area"
        placeholder="Type your text here..."
        onChange={handleTextChange}
        value={text}
        rows={5}
        cols={50}
      />
      <p>
        Word Count:
        {wordCount}
      </p>
      <p>
        Letter Count:
        {letterCount}
      </p>
    </div>
  );
}

export default WordLetterCounter;
