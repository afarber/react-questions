import { Box } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      bgcolor="lightpink"
      flex={4}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      Rightbar
    </Box>
  );
};

export default Rightbar;
