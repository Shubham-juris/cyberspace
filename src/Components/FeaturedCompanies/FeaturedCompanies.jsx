import React, { useState } from "react";
import { Box, Typography, Avatar, Stack, useMediaQuery, useTheme } from "@mui/material";
import { styled } from "@mui/system";

const ScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  gap: "16px",
  padding: "10px",
  scrollbarWidth: "none",
  justifyContent: "center",
  alignItems: "center",
  maxWidth: "100%",
  whiteSpace: "nowrap",
  scrollSnapType: "x mandatory",
  "&::-webkit-scrollbar": {
    display: "none",
  },
}));

const companies = [
  { id: 1, name: "AIM", logo: "/path-to-logo1.png" },
  { id: 2, name: "GMO", logo: "/path-to-logo2.png" },
  { id: 3, name: "LrC", logo: "/path-to-logo3.png" },
  { id: 4, name: "Calgary Software Developers", logo: "/path-to-logo4.png" },
  { id: 5, name: "Techware", logo: "/path-to-logo5.png" },
  { id: 6, name: "Company X", logo: "/path-to-logo6.png" },
];

const FeaturedCompanies = () => {
  const [centerIndex, setCenterIndex] = useState(Math.floor(companies.length / 2));
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const handleClick = (index) => {
    setCenterIndex(index);
  };

  return (
    <Box textAlign="center" my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
      <Typography variant={isMobile ? "h6" : "h5"} color="primary" gutterBottom>
        Featured Companies
      </Typography>
      <ScrollContainer sx={{ maxWidth: "80vw", overflowX: "auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {companies.map((company, index) => (
          <Stack
            key={company.id}
            alignItems="center"
            spacing={1}
            sx={{
              opacity: index === centerIndex ? 1 : 0.5,
              transform: index === centerIndex ? "scale(1.2)" : "scale(0.9)",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              flex: "0 0 16.66%", // Show 6 items fully
              scrollSnapAlign: "center",
            }}
            onClick={() => handleClick(index)}
          >
            <Avatar 
              src={company.logo} 
              alt={company.name} 
              sx={{ 
                width: isMobile ? 40 : isTablet ? 60 : 80, 
                height: isMobile ? 40 : isTablet ? 60 : 80 
              }} 
            />
          </Stack>
        ))}
      </ScrollContainer>
    </Box>
  );
};

export default FeaturedCompanies;
