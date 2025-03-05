import React from "react";
import { Container, Typography, Grid, Paper } from "@mui/material";
import contactImage from "../../assets/Img/AboutUs.jpg";

const AboutUs = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{ fontWeight: "bold", color: "#6d5b4b" }}
      >
        ABOUT US
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ overflow: "hidden", borderRadius: 2 }}>
            <img
              src={contactImage}
              alt="About Us"
              style={{ width: "100%", height: "auto" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" sx={{ color: "#4a4a4a", lineHeight: 1.7 }}>
          What sets Cyberspace-Inc apart is our unwavering commitment to excellence, integrity, and innovation. We prioritize the needs of both job seekers and employers, striving to exceed expectations and deliver results that drive mutual success. With a user-friendly interface, robust search functionality, and personalized job matching algorithms, we make it easy for candidates to find the perfect job and for employers to identify the ideal candidate 
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;