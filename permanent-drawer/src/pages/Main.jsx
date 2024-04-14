"use client";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MainDrawer from "../components/MainDrawer";
import { MyComponent } from "../components/MyComponent";

export default function Main() {
  return (
    <>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 1 }}
      >
        <MyComponent />
      </Box>
      <MainDrawer />
    </>
  );
}
