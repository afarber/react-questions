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
import { Link } from "react-router-dom";
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
  { path: "new-game", text: "New game", icon: <AddCircle /> },
  { path: "stats", text: "Statistics", icon: <BarChart /> },
  { path: "rating", text: "Rating", icon: <EmojiEvents /> },
];

const list2 = [
  { path: "words-search", text: "Word search", icon: <Search /> },
  { path: "letters-2", text: "2 letters", icon: <MenuBook /> },
  { path: "letters-3", text: "3 letters", icon: <MenuBook /> },
  { path: "rare-1", text: "Letter Q", icon: <MenuBook /> },
  { path: "rare-2", text: "Letter Z", icon: <MenuBook /> },
];

const list3 = [
  { path: "night-mode", text: "Night mode", icon: <ModeNight /> },
  { path: "help", text: "Help", icon: <Help /> },
  { path: "privacy-policy", text: "Privacy policy", icon: <Help /> },
  { path: "terms-of-service", text: "Terms of service", icon: <Help /> },
];

function DrawerItem({ text, path, icon }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        <Link to={path} className="link">
          <ListItemText primary={text} />
        </Link>
      </ListItemButton>
    </ListItem>
  );
}

DrawerItem.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
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
      <nav>
        <List>
          {list1.map((item, index) => (
            <DrawerItem
              key={index}
              icon={item.icon}
              path={item.path}
              text={item.text}
            />
          ))}
        </List>
        <Divider />
        <List>
          {list2.map((item, index) => (
            <DrawerItem
              key={index}
              icon={item.icon}
              path={item.path}
              text={item.text}
            />
          ))}
        </List>
        <Divider />
        <List>
          {list3.map((item, index) => (
            <DrawerItem
              key={index}
              icon={item.icon}
              path={item.path}
              text={item.text}
            />
          ))}
        </List>
      </nav>
    </Drawer>
  );
}
