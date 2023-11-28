import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React, { useState } from "react";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "8px",
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "12px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (ev) => {
    console.log("handleClick");
    setAnchorEl(ev.currentTarget);
  };
  const handleClose = () => {
    console.log("handleClose");
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LunchDiningIcon />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Navbar
        </Typography>
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <ChatBubbleIcon />
          </Badge>
          <Badge badgeContent={134} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar
            src="https://afarber.de/images/farber.jpg"
            sx={{ width: 30, height: 30 }}
            onClick={handleClick}
          ></Avatar>
        </Icons>
        <UserBox>
          <Avatar
            src="https://afarber.de/images/farber.jpg"
            sx={{ width: 30, height: 30 }}
            onClick={handleClick}
          ></Avatar>
          <Typography variant="body1">Alex</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        open={anchorEl != null}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
