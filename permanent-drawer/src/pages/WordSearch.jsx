"use client";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Box, InputAdornment } from "@mui/material";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

export default function WordSearch() {
  const [word, setWord] = useState("");
  const [description, setDescription] = useState("");
  const [found, setFound] = useState(false);

  const handleChange = (ev) => {
    ev.preventDefault();
    const key = ev.target.value.trim().toUpperCase();
    // TODO key = hashWord(key);
    setWord(key);

    // use the key and not word below, because the latter is updated async
    if (key.length < 2) {
      setFound(false);
      setDescription("");
    } else {
      setFound(Object.prototype.hasOwnProperty.call(HASHED, key));
      setDescription(
        HASHED[key] || "The word is not found in the game dictionary"
      );
    }
  };

  return (
    <Box component="form" noValidate autoComplete="on">
      <TextField
        id="wordInput"
        label="__ENTER_WORD__"
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
