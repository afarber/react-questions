"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function WordSearch() {
  const [word, setWord] = useState("");

  const handleChange = (e) => {
    setWord(e.target.value);
  };

  return (
    <div>
      <form>
        <TextField
          id="wordInput"
          label="Enter a word"
          value={word}
          onChange={handleChange}
        />
      </form>

      <div>
        <h2>Word:</h2>
        <p>{word}</p>
        <h2>Description:</h2>
        <p>A brief description of the word goes here.</p>
      </div>
    </div>
  );
}
