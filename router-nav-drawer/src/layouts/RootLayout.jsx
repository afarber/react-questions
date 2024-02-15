"use client";

import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import NavDrawer from "../components/NavDrawer";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
      >
        <Toolbar>
          <Typography variant="p" noWrap component="div">
            Use BrowserRouter with MUI Drawer!
          </Typography>
        </Toolbar>
      </AppBar>

      <NavDrawer />
      <Toolbar />
      <Outlet />
    </Box>
  );
}
