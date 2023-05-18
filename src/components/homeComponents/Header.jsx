import { Container, Link, Typography } from "@mui/material";
import React from "react";
import Searcher from "./Searcher";
import land from "./assets/bgland.png";

const header = {
  backgroundImage: `url(${land})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  pt: {
    xs: "20px",
  },
  pb: 4,
  mb: 10,
};

const nav = {
  display: "flex",
  justifyContent: "space-around",
};

const logo = {
  width: {
    xs: "30%",
    sm: "30%",
  },
  color: "#FFF",
  fontWeight: 400,
  fontSize: {
    xs: "20px",
    md: "25px",
  },
  alignSelf: "flex-start",
};

const myPhotos = {
  textAlign: "center",
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
          <Link
            sx={{
              height: "25px",
              width: {
                xs: "30%",
              },
            }}
            href="/myphotos"
            underline="none"
          >
            <Typography sx={myPhotos}>MY PHOTOS</Typography>
          </Link>
        </Container>
      </Container>
    </header>
  );
};

export default Header;
