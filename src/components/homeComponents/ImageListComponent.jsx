import { Box, Button, ImageListItem } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import today, { download } from "../../utils/index.js";
import { saveImage } from "../../features/favourites/favouritesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setItem } from "../../utils/localStorage.js";

const ImageListComponent = ({ image, index }) => {
  const [savedImage, setSavedImage] = useState([false]);
  const favourites = useSelector((state) => state.favourites.favouritesState);
  const fav = favourites;
  const dispatch = useDispatch();

  const setFavourite = (image) => {
    if (fav.map((f) => f.id !== image.id).find((f) => f === false) !== false) {
      let { description } = image;
      const { id, width, height, likes, urls } = image;
      if (!description) {
        description = " ";
      }
      const newImage = { id, description, width, height, likes, urls, today };
      dispatch(saveImage(newImage));
      alert("Image added to favourites :)");
    } else {
      alert("You already have that image in your favs");
    }
  };

  const saveSelfLike = async (index) => {
    const delay = (ms) => new Promise((res) => setTimeout(res, ms));
    let images = savedImage;
    images[index] = true;
    setSavedImage(images);
    await delay(500);
    images[index] = false;
    setSavedImage(images);
  };

  useEffect(() => {
    setItem("favourites", [...favourites]);
  }, [favourites]);

  return (
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
              saveSelfLike(index);
              setFavourite(image);
            }}
            sx={{ backgroundColor: "#000" }}
          >
            {savedImage[index] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </Button>
          <Button
            sx={{ backgroundColor: "#000" }}
            onClick={() => download(image.urls.full)}
          >
            <DownloadIcon />
          </Button>
        </Box>
      </Box>
      <img src={image.urls.small} alt={image.alt_description} loading="lazy" />
    </ImageListItem>
  );
};

export default ImageListComponent;

const imageItem = {
  width: {
    xs: "100%",
    sm: "40%",
    lg: "32%",
  },
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
