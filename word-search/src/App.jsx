"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, InputAdornment } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export default function App() {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");
  const [found, setFound] = useState(false);

  const handleChange = (ev) => {
    ev.preventDefault();
    const key = ev.target.value.trim().toUpperCase();
    // TODO key = hashWord(key);
    console.log(key);
    setWord(key);

    // TODO set error
    if (key.length < 2) {
      setDescription("");
      return;
    }

    setFound(HASHED.hasOwnProperty(key));
    // TODO this does not work, use prevState
    if (!found) {
      setDescription("The word is not found in the game dictionary");
      return;
    }

    const value = HASHED[key];
    setDescription(value || "");
  };

  return (
    <Box component="form" noValidate autoComplete="on">
      <TextField
        id="wordInput"
        label="Enter a word"
        value={word}
        onChange={handleChange}
      />

      <Box sx={{ p: 2 }}>
        {found ? <ThumbUp color="primary" /> : <ThumbDown color="error" />}
      </Box>

      <Box>{description}</Box>
    </Box>
  );
}
