"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const BOARD_NAMES = ["__WINTER__", "__SPRING__", "__SUMMER__", "__AUTUMN__"];

export default function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const createDrawerList = () => (
    <Box
      sx={{ width: "auto", p: 4 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Typography variant="p" gutterBottom>
        __SELECT_BOARD__:
      </Typography>
      <List>
        {BOARD_NAMES.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={() => console.log(index, text)}>
              <ListItemIcon>
                <AddCircleOutlineIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Button onClick={toggleDrawer(true)}>__NEW_GAME__</Button>
      <Drawer anchor="bottom" open={drawerOpen} onClose={toggleDrawer(false)}>
        {createDrawerList()}
      </Drawer>
    </>
  );
}
