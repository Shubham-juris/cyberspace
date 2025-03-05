import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Menu as MenuIcon } from "@mui/icons-material";

const navItems = ["Home", "About", "Job Seekers", "Employers", "Employers Portal", "Get In Touch"];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const drawer = (
    <Box sx={{ textAlign: "center", width: 250, p: 2 }}>
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton onClick={() => setMobileOpen(false)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: scrolled ? "rgba(0, 0, 0, 0.8)" : "transparent",
        boxShadow: "none",
        transition: "background-color 0.3s ease-in-out",
        padding: "10px 0",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: scrolled ? "yellow" : "white" }}>
          Cyberspace-inc
        </Typography>

        {isMobile ? (
          <IconButton color="inherit" onClick={handleDrawerToggle}>
            <MenuIcon sx={{ color: scrolled ? "yellow" : "white" }} />
          </IconButton>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: scrolled ? "yellow" : "white",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  mx: 1,
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>

      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        {drawer}
      </Drawer>
    </AppBar>
  );
}

export default Navbar;
