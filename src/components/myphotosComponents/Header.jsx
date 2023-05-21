import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Searcher from "./Searcher";
import land from "./assets/bgland.png";
import TagsBanner from "./TagsBanner";
import { Link } from "react-router-dom";
import { filterByDescription } from "../../features/favourites/favouritesSlice";

const Header = () => {

  return (
    <header>
      <Container sx={header} maxWidth={false} disableGutters>
        <Container sx={nav} maxWidth={false} disableGutters>
          <Typography sx={logo} variant="h1">
            Photos App
          </Typography>
          <Searcher />
          <Box
            sx={{
              height: "25px",
              width: {
                xs: "30%",
              },
            }}
          >
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => filterByDescription()}
            >
              <Typography sx={myPhotos}>HOME</Typography>
            </Link>
          </Box>
        </Container>
        <TagsBanner />
      </Container>
    </header>
  );
};

export default Header;

const header = {
  backgroundImage: `url(${land})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  pt: {
    xs: "20px",
  },
  mb: 10,
};

const nav = {
  display: "flex",
  justifyContent: "space-around",
};

const logo = {
  width: "30%",
  color: "#FFF",
  fontWeight: 400,
  fontSize: {
    md: "25px",
    xs: "20px",
  },
  alignSelf: "flex-start",
};

const myPhotos = {
  alignSelf: "flex-start",
  textAlign: "center",
  color: "#FFF",
  fontWeight: 500,
  cursor: "pointer",
};
