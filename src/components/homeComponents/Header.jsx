import { Container, Link, Typography } from "@mui/material";
import React from "react";
import Searcher from "./Searcher";
import land from "./assets/bgland.png";
import TagsBanner from "./TagsBanner";


const header = {
  backgroundImage: `url(${land})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  pt: {
    xs: "20px",
    sm: "100px"
  },
  mb: 10,
};

const nav = {
  display: "flex",
  justifyContent: "space-around",
};

const logo = {
  color: "#FFF",
  fontWeight: 400,
  fontSize: {
    md:"25px",
    xs:"20px"
  },
  alignSelf: "flex-start",
};

const myPhotos = {
  alignSelf: "flex-start",
  color: "#FFF",
  fontWeight: 500,
  cursor: "pointer",
};

const Header = () => {
  return (
    <header>
      <Container sx={header} maxWidth={false} disableGutters>
        <Container sx={nav} maxWidth={false} disableGutters>
          <Typography sx={logo} variant="h1">
            Photos App
          </Typography>
          <Searcher />
          <Link sx={{height: "25px"}} href="/myphotos"  underline="none">
            <Typography sx={myPhotos}>MY PHOTOS</Typography>
          </Link>
        </Container>
        <TagsBanner />
      </Container>
    </header>
  );
};

export default Header;
