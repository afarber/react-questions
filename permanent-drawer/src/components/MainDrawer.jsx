"use client";

import DrawerItem from "./DrawerItem";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import {
  Casino,
  Flag,
  Fullscreen,
  History,
  PlayCircle,
  Share,
  SkipNext,
  SwapHoriz,
  SwapVert,
} from "@mui/icons-material";

const drawerWidth = 240;

const drawerActions = [
  { text: "Full screen", icon: <Fullscreen /> },
  { text: "Swap", icon: <SwapVert /> },
  { text: "Skip", icon: <SkipNext /> },
  { text: "Resign", icon: <Flag /> },
  { text: "Pile: 79", icon: <Casino /> },
  { text: "Moves history", icon: <History /> },
  { text: "Share", icon: <Share /> },
  { text: "Play", icon: <PlayCircle /> },
  { text: "Shuffle", icon: <SwapHoriz /> },
];

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
        {drawerActions.map((item, index) => (
          <DrawerItem key={index} icon={item.icon} text={item.text} />
        ))}
      </List>
    </Drawer>
  );
}
