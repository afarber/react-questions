"use client";

import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import { ThumbDown, ThumbUp } from "@mui/icons-material";

const ITEMS = ["Winter", "Spring", "Summer", "Autumn"];

export default function App() {
  const [state, setState] = useState(true);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(open);
  };

  return (
    <>
      <Drawer anchor="bottom" open={state} onClose={toggleDrawer(false)}>
        XXX {ITEMS}
      </Drawer>
    </>
  );
}
