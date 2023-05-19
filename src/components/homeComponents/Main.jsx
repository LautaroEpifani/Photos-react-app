import { Box, Button, ImageListItem, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { saveImage } from "../../features/favourites/favouritesSlice";
import { getItem, setItem } from "../../utils/localStorage";
import today from "../../utils/index.js";

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
  const searchResults = useSelector((state) => state.search.results);
  const [savedImage, setSavedImage] = useState(false);

  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();
 
  const setFavourite = (image) => {
    const { id, description, width, height, likes, urls } = image;
    const newImage = { id, description, width, height, likes, urls, today };
    dispatch(saveImage(newImage));
    
  };

  useEffect(() => {
    setItem("favourites", [...favourites] || []);
  }, [favourites])

  return (
    <main>
      <Typography sx={resultsTitle}>Results</Typography>
      <Box sx={imageList}>
        {searchResults.map((image) => (
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
                    setSavedImage(!savedImage);
                    setFavourite(image);
                  }}
                  sx={{ backgroundColor: "#000" }}
                >
                  {savedImage ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </Button>
                <Button sx={{ backgroundColor: "#000" }}>
                  <DownloadIcon />
                </Button>
              </Box>
            </Box>
            <img
              src={image.urls.small}
              alt={image.alt_description}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </Box>
    </main>
  );
};

export default Main;
