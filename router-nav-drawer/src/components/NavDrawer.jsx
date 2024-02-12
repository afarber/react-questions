"use client";

import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import { CarCrash, CarRepair, Directions, Help } from "@mui/icons-material";
import DrawerItem from "./DrawerItem";

const drawerWidth = 240;

const drawerLinks = [
  { text: "Page 1", path: "/page1", icon: <CarCrash /> },
  { text: "Page 2", path: "/page2", icon: <Help /> },
  { text: "Page 3", path: "/page3", icon: <Directions /> },
  { text: "Page 4", path: "/page4", icon: <CarRepair /> },
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
          {drawerLinks.map((item, index) => (
            <DrawerItem
              key={index}
              text={item.text}
              path={item.path}
              icon={item.icon}
            />
          ))}
        </List>
      </nav>
    </Drawer>
  );
}
