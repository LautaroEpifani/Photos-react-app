import { Box, Button, ImageListItem, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch, useSelector } from "react-redux";
import { deleteFavourite } from "../../features/favourites/favouritesSlice";
import { useEffect } from "react";
import { setItem } from "../../utils/localStorage";
import { download } from "../../utils";

const ImageListComponent = ({ image, setOpen, setDescription, setImageEdit }) => {
  const favourites = useSelector((state) => state.favourites.favouritesState);
  const dispatch = useDispatch();
  const openModal = () => setOpen(true);

  const deleteFav = (image) => {
    dispatch(deleteFavourite(image));
  };
  
  useEffect(() => {
    setItem("favourites", [...favourites]);
  }, [favourites]);

  return (
    <ImageListItem sx={imageItem} key={image.id}>
      <Box sx={bgAbsolute}>
        <Box sx={{}}>
          <Typography
            sx={{
              color: "#FFF",
              px: 1,
              mt: 1,
              mb: 2,
              textDecoration: "underline",
            }}
          >
            {image.description}
          </Typography>
          <Box
            sx={{
              color: "#FFF",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              pl: 1,
            }}
          >
            <Typography>Width: {image.height}</Typography>
            <Typography>Height: {image.width}</Typography>
            <Typography>Likes: {image.likes}</Typography>
            <Typography>Date added: {image.today}</Typography>
          </Box>
        </Box>
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
              openModal();
              setImageEdit(image);
              setDescription(image.description);
            }}
            sx={{ backgroundColor: "#000" }}
          >
            <DriveFileRenameOutlineIcon />
          </Button>
          <Button
            sx={{ backgroundColor: "#000" }}
            onClick={() => deleteFav(image)}
          >
            <DeleteIcon />
          </Button>
          <Button sx={{ backgroundColor: "#000" }} onClick={() => download(image.urls.full)}>
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
  backgroundColor: "#D6D6D6",
  opacity: 0,
  display: "flex",
  "&:hover": {
    opacity: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};
