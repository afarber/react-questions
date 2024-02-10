"use client";

import "./NavDrawer.css";
import PropTypes from "prop-types";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {
  AddCircle,
  BarChart,
  EmojiEvents,
  Help,
  MenuBook,
  ModeNight,
  Search,
} from "@mui/icons-material";

const drawerWidth = 240;

const list1 = [
  { text: "New game", icon: <AddCircle /> },
  { text: "Statistics", icon: <BarChart /> },
  { text: "Rating", icon: <EmojiEvents /> },
];

const list2 = [
  { text: "Word search", icon: <Search /> },
  { text: "2 letters", icon: <MenuBook /> },
  { text: "3 letters", icon: <MenuBook /> },
  { text: "Letter Q", icon: <MenuBook /> },
  { text: "Letter Z", icon: <MenuBook /> },
];

const list3 = [
  { text: "Night mode", icon: <ModeNight /> },
  { text: "Help", icon: <Help /> },
  { text: "Privacy policy", icon: <Help /> },
  { text: "Terms of service", icon: <Help /> },
];

function MyListItem({ text, icon }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <Link to="/letters2">
          <ListItemText primary={text} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
}

MyListItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default function LeftDrawer() {
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
      anchor="left"
    >
      <Toolbar />
      <BrowserRouter>
        <nav>
          <List>
            {list1.map((item, index) => (
              <MyListItem key={index} icon={item.icon} text={item.text} />
            ))}
          </List>
          <Divider />
          <List>
            {list2.map((item, index) => (
              <MyListItem key={index} icon={item.icon} text={item.text} />
            ))}
          </List>
          <Divider />
          <List>
            {list3.map((item, index) => (
              <MyListItem key={index} icon={item.icon} text={item.text} />
            ))}
          </List>
        </nav>
      </BrowserRouter>
    </Drawer>
  );
}
