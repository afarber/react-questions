import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material";
import "./App.css";
import Main from "./pages/Main";
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
        <NavDrawer />
        <Toolbar />
        <Main />
      </Box>
    </>
  );
}
