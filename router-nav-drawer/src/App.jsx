import "./App.css";
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavDrawer from "./components/NavDrawer";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";

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
            <Typography variant="p" noWrap component="div">
              Use BrowserRouter with MUI Drawer!
            </Typography>
          </Toolbar>
        </AppBar>

        <BrowserRouter>
          <NavDrawer />
          <Toolbar />
          <Routes>
            <Route path="page1" element={<Page1 />} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="*" element={<Page4 />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}
