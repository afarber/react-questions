"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, InputAdornment } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

const DICT = {
  AA: "Rough, cindery lava",
  AB: "An abdominal muscle",
  ABS: "Abdominal muscles",
  ABSQUATULATE: "",
  ABSQUATULATED: "",
  ABSQUATULATES: "",
  ABSQUATULATING: "",
  ABY: "Pay the penalty",
};

export default function App() {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");
  const [found, setFound] = useState(false);

  const handleChange = (ev) => {
    ev.preventDefault();
    const key = ev.target.value.trim().toUpperCase();
    setWord(key);

    // use the key and not word below, because the latter is updated async
    if (key.length < 2) {
      setFound(false);
      setDescription("");
    } else {
      setFound(Object.prototype.hasOwnProperty.call(DICT, key));
      setDescription(DICT[key] || "The word is not found in the dictionary");
    }
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
