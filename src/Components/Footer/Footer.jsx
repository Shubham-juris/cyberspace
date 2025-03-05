import React from "react";
import { Box, Typography, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="footer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 2,
        px: 3,
        // mt: 4,
        backgroundColor: "Blue",
        fontSize: isMobile ? "1rem" : "1.5rem", // Adjusted for readability
        color: "white",
      }}
    >
      <Box sx={{ display: "flex", gap: 1 }}>
        <IconButton href="https://facebook.com" target="_blank">
          <Facebook sx={{ color: "white" }} />
        </IconButton>
        <IconButton href="https://twitter.com" target="_blank">
          <Twitter sx={{ color: "white" }} />
        </IconButton>
        <IconButton href="https://instagram.com" target="_blank">
          <Instagram sx={{ color: "white" }} />
        </IconButton>
        <IconButton href="https://linkedin.com" target="_blank">
          <LinkedIn sx={{ color: "white" }} />
        </IconButton>
      </Box>
      <Typography variant="body2" color="white" sx={{ mt: 1, textAlign: "center" }}>
        &copy; {new Date().getFullYear()} Cyberspace-inc - All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
