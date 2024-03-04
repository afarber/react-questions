"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";

export default function WordSearch() {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (ev) => {
    ev.preventDefault();
    const key = ev.target.value;
    // TODO key = hashWord(ev.target.value.trim());
    console.log(key);
    setWord(key);

    // TODO set error
    if (key.length < 2) {
      setDescription("");
      return;
    }

    if (!HASHED.hasOwnProperty(key)) {
      setDescription("The word is not found in the game dictionary");
      return;
    }

    const value = HASHED[key];
    setDescription(value || "");
  };

  return (
    <div>
      <form>
        <TextField
          id="wordInput"
          label="__ENTER_WORD__"
          value={word}
          onChange={handleChange}
        />
      </form>

      <div>
        <h2>Word:</h2>
        <p>{word}</p>
        <h2>Description:</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}
