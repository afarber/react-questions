"use client";

import DrawerItem from "./DrawerItem";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import {
  AddCircle,
  BarChart,
  EmojiEvents,
  Help,
  MenuBook,
  Search,
  Settings,
} from "@mui/icons-material";

const drawerWidth = 240;

const drawerLinks1 = [
  { path: "new-game", text: "__NEW_GAME__", icon: <AddCircle /> },
  { path: "stats", text: "__STATS__", icon: <BarChart /> },
  { path: "top", text: "__RATING__", icon: <EmojiEvents /> },
];

const drawerLinks2 = [
  { path: "words-search", text: "Word search", icon: <Search /> },
  { path: "letters-2", text: "2 letters", icon: <MenuBook /> },
  { path: "letters-3", text: "3 letters", icon: <MenuBook /> },
  { path: "rare-1", text: "Letter Q", icon: <MenuBook /> },
  { path: "rare-2", text: "Letter Z", icon: <MenuBook /> },
];

const drawerLinks3 = [
  { path: "settings", text: "Settings", icon: <Settings /> },
  { path: "help", text: "Help", icon: <Help /> },
  { path: "privacy-policy", text: "Privacy policy", icon: <Help /> },
  { path: "terms-of-service", text: "Terms of service", icon: <Help /> },
];

export default function NavDrawer() {
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
          {drawerLinks1.map((item, index) => (
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
          {drawerLinks2.map((item, index) => (
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
          {drawerLinks3.map((item, index) => (
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
