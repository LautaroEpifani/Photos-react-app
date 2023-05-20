import { Box, Link, Typography } from "@mui/material";
import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const boxFooter = {
  width: "100%",
  py: 1,
  backgroundColor: "#B5D7FF",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  gap: {
    xs: 2,
    lg: 100,
  }
};

const logo = {
  color: "#FFF",
  fontWeight: 400,
  fontSize: {
    xs: "15px",
    sm: "25px",
  },
  mb: 0.5,
};

const rights = {
  color: "#FFF",
  fontWeight: 400,
  fontSize: {
    xs: "10px",
    sm: "15px",
  },
};

const Footer = () => {
  return (
    <Box sx={boxFooter}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography sx={logo} variant="h1">
          Photos App
        </Typography>
        <Typography sx={rights}>® all rights reserved 2023</Typography>
      </Box>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <Link href="https://msng.link/o?photosapp=ig" underline="none">
          <InstagramIcon sx={{ color: "#FFF" }} />
        </Link>
        <Link href="https://twitter.com/intent/tweet?url=photosapp.com">
          <TwitterIcon sx={{ color: "#FFF" }} />
        </Link>
        <Link href="https://www.facebook.com/sharer/sharer.php?u=photosapp.com">
          <FacebookIcon sx={{ color: "#FFF" }} />
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
