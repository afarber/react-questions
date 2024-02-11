import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import WordList from "./pages/WordList";
import NavDrawer from "./components/NavDrawer";

export default function App() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: (theme) => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Permanent drawer
            </Typography>
          </Toolbar>
        </AppBar>

        <BrowserRouter>
          <NavDrawer />
          <Toolbar />
          <Routes>
            <Route path="letters-2" element={<WordList />} />
            <Route path="letters-3" element={<WordList />} />
            <Route path="rare-1" element={<WordList />} />
            <Route path="rare-2" element={<WordList />} />
            <Route path="*" element={<Main />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}
