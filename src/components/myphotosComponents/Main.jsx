import { Box, ImageListItem, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import { setItem } from "../../utils/localStorage";

const resultsTitle = {
  textAlign: "center",
  color: "#000",
  fontWeight: 500,
  fontSize: "20px",
  mt: 2,
  textDecoration: "underline",
};

const imageList = {
  width: "80%",
  mx: "auto",
  display: "flex",
  flexWrap: "wrap",
  mt: "20px",
  gap: "20px",
};

const imageItem = {
  width: "32%",
  "&:hover": {
    border: 4,
    borderColor: "#B5D7FF",
  },
};

const bgAbsolute = {
  width: "100%",
  height: "100%",
  position: "absolute",
  zIndex: 1,
  opacity: 0,
  "&:hover": {
    opacity: 1,
  },
};

const Main = () => {
  const favourites = useSelector((state) => state.favourites);
  console.log(favourites)
  

  return (
    <main>
      <Typography sx={resultsTitle}>Results for images</Typography>
      <Box sx={imageList}>
        {
        favourites ?   
        favourites.map((image) => (
          <ImageListItem sx={imageItem} key={image.id}>
            <Box sx={bgAbsolute}>
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "5px",
                }}
              >
                <Button
                  onClick={() => {
                    
                  }}
                  sx={{ backgroundColor: "#000" }}
                >
                </Button>
                <Button sx={{ backgroundColor: "#000" }}>
                  <DownloadIcon/>
                </Button>
              </Box>
            </Box>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))
        : <></>
        }
      </Box>
    </main>
  );
};

export default Main;
