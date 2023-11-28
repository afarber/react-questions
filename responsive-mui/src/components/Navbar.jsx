import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Toolbar,
  Typography,
  styled,
} from "@mui/material";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

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
  display: "flex",
  gap: "20px",
}));

const Navbar = () => {
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
          ></Avatar>
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
