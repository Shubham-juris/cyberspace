import React from "react";
import { Box, Typography } from "@mui/material";
import backgroundImage from "../../assets/Img/Bg1.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width: 425px)");
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",  
        maxWidth: "100vw",
        height: isMobile ? "50vh" : isTablet ? "85vh" : "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: "White",
        overflow: "hidden", 
        px: isMobile ? 1 : 2,
      }}
    >
      <Box
        sx={{
          maxWidth: "100%",
          px: isMobile ? 2 : 4,
        }}
      >
        <Typography
          variant={isMobile ? "h1" : isTablet ? "h4" : "h12"}
          fontWeight="bold"
          sx={{
            fontSize: isMobile ? "1rem" : "40px",
            lineHeight: isMobile ? 1.3 : "inherit",
            textShadow: "1px 1px 2px rgba(241, 233, 233, 0.3)",
          }}
        >
         Welcome to Cyberspace-Inc
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;