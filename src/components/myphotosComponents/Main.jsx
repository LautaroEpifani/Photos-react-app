import {
  Box,
  ImageListItem,
  Typography,
  Button,
  Modal,
  Input,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import DownloadIcon from "@mui/icons-material/Download";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteFavourite, editDescription } from "../../features/favourites/favouritesSlice";
import { useEffect, useState } from "react";
import { setItem } from "../../utils/localStorage";

const Main = () => {
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [imageEdit, setImageEdit] = useState(null);

  const favourites = useSelector((state) => state.favourites);
  const dispatch = useDispatch();

  const closeModal = () => setOpen(false);
  const openModal = () => setOpen(true);

  useEffect(() => {
    setItem("favourites", [...favourites])
  }, [favourites])

  return (
    <main>
      <Typography sx={resultsTitle}>Gallery</Typography>
      <Box sx={imageList}>
        <Modal open={open} onClose={() => closeModal()}>
          <Box sx={{ display: open ? modal : "none" }}>
            <Typography sx={{ mt: 2, ml: 2 }} variant="h6" component="h2">
              Edit Description
            </Typography>
            <Input
              sx={{ mt: 2, mb: 4, ml: 2 }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></Input>
            <Button
              onClick={() => {
                closeModal();
                dispatch(editDescription({ imageEdit, description }));
              }}
            >
              Edit
            </Button>
          </Box>
        </Modal>
        {favourites ? (
          favourites.map((image) => (
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
                      console.log(image);
                      setDescription(image.description)
                    }}
                    sx={{ backgroundColor: "#000" }}
                  >
                    <DriveFileRenameOutlineIcon />
                  </Button>
                  <Button sx={{ backgroundColor: "#000" }} onClick={() => dispatch(deleteFavourite(image))}>
                    <DeleteIcon />
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
          ))
        ) : (
          <></>
        )}
      </Box>
    </main>
  );
};

export default Main;

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
  justifyContent: "center",
  flexWrap: "wrap",
  mt: "20px",
  gap: "20px",
};

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

const modal = {
  width: "20%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};
