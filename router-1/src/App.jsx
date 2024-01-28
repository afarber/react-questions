import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageNotFound from "./pages/PageNotFound";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { Menu } from "@mui/icons-material";

function App() {
  return (
    <>
      <Box>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            Test
          </Toolbar>
        </AppBar>
        {/* TODO add margin-top */}
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/PageOne">PageOne</Link>
            &nbsp;|&nbsp;
            <Link to="/PageTwo">PageTwo</Link>
            &nbsp;|&nbsp;
            <Link to="/PageThree">PageThree</Link>
          </nav>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="PageOne" element={<PageOne />} />
            <Route path="PageTwo" element={<PageTwo />} />
            <Route path="PageThree" element={<PageThree />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </>
  );
}

export default App;
