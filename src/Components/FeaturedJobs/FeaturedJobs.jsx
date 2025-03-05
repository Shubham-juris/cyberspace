import React from "react";
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Box } from "@mui/material";
import jobsImg from "../../assets/Img/Bg.jpg";

const jobs = [
  { title: "Data Scientist", image: jobsImg },
  { title: "Web Developers", image: jobsImg },
  { title: "Full Stack Developers", image: jobsImg },
  { title: "DevOps Engineer", image: jobsImg },
  { title: "Cloud Computing", image: jobsImg },
  { title: "Cybersecurity Analyst", image: jobsImg }
];

const FeaturedJobs = () => {
  return (
    <Box sx={{ padding: 3, textAlign: "center" }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", color: "#955F32" }}>
        Featured Jobs
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {jobs.map((job, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <Card sx={{ position: "relative" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="400"
                  image={job.image}
                  alt={job.title}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "#fff",
                    textAlign: "center",
                    padding: 1
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {job.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedJobs;