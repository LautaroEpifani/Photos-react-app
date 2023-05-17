import { Container, Typography } from "@mui/material";
import React from "react";
import Searcher from "./Searcher";
import land from "./assets/bgland.png";
import TagsBanner from "./TagsBanner";

const header = {
  backgroundImage: `url(${land})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  pt: "100px",
  mb: 10,
};

const nav = {
  display: "flex",
  justifyContent: "space-around",
};

const logo = {
  color: "#FFF",
  fontWeight: 400,
  fontSize: "25px",
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
          <Typography sx={myPhotos}>MY PHOTOS</Typography>
        </Container>
        <TagsBanner />
      </Container>
    </header>
  );
};

export default Header;
