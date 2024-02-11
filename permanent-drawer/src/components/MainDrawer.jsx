"use client";

import "./MainDrawer.css";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Casino,
  Flag,
  Fullscreen,
  History,
  PlayCircle,
  Settings,
  Share,
  SkipNext,
  SwapHoriz,
  SwapVert,
} from "@mui/icons-material";

const drawerWidth = 240;

const list1 = [
  { text: "Full screen", icon: <Fullscreen /> },
  { text: "Swap", icon: <SwapVert /> },
  { text: "Skip", icon: <SkipNext /> },
  { text: "Resign", icon: <Flag /> },
  { text: "Pile: 79", icon: <Casino /> },
  { text: "Moves history", icon: <History /> },
  { text: "Settings", icon: <Settings /> },
  { text: "Share", icon: <Share /> },
  { text: "Play", icon: <PlayCircle /> },
  { text: "Shuffle", icon: <SwapHoriz /> },
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
          backgroundColor: "lightblue",
        },
      }}
      variant="permanent"
      anchor="right"
    >
      <Toolbar />
      <List>
        {list1.map((item, index) => (
          <DrawerItem key={index} icon={item.icon} text={item.text} />
        ))}
      </List>
    </Drawer>
  );
}
