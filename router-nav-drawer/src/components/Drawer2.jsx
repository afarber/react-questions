"use client";

import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Fullscreen, SkipNext, SwapVert } from "@mui/icons-material";

const drawerWidth = 240;

const drawerActions = [
  { text: "Full screen", icon: <Fullscreen /> },
  { text: "Swap", icon: <SwapVert /> },
  { text: "Skip", icon: <SkipNext /> },
];

function DrawerItem({ text, icon }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}

DrawerItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default function MainDrawer() {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
      }}
      ModalProps={{
        // Better open performance on mobile
        keepMounted: true,
      }}
      PaperProps={{
        sx: {
          boxSizing: "border-box",
          width: drawerWidth,
          backgroundColor: "lightgreen",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <List>
        {drawerActions.map((item, index) => (
          <DrawerItem key={index} icon={item.icon} text={item.text} />
        ))}
      </List>
    </Drawer>
  );
}
