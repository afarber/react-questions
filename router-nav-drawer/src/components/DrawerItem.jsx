"use client";

import PropTypes from "prop-types";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export default function DrawerItem({ icon, text, path }) {
  return (
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>{icon}</ListItemIcon>
        {path ? (
          <Link to={path} style={{ color: "#333" }}>
            <ListItemText primary={text} />
          </Link>
        ) : (
          <ListItemText primary={text} />
        )}
      </ListItemButton>
    </ListItem>
  );
}

DrawerItem.propTypes = {
  icon: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  // the path argument is optional
  path: PropTypes.string,
};
