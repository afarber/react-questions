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
  VerticalAlignBottom,
} from "@mui/icons-material";

const drawerWidth = 240;

const drawerActions = [
  { text: "__FULL_SCREEN__", icon: <Fullscreen /> },
  { text: "__SWAP__", icon: <SwapVert /> },
  { text: "__SKIP__", icon: <SkipNext /> },
  { text: "__RESIGN__", icon: <Flag /> },
  { text: "__PILE__: 43", icon: <Casino /> },
  { text: "__MOVES_HISTORY__", icon: <History /> },
  { text: "__SHARE__", icon: <Share /> },
  { text: "__PLAY__", icon: <PlayCircle /> },
  { text: "__SHUFFLE__", icon: <SwapHoriz /> },
  { text: "__RECALL__", icon: <VerticalAlignBottom /> },
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
