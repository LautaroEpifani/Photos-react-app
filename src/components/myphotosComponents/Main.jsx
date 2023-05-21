import { Box, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { editDescription } from "../../features/favourites/favouritesSlice";
import { useEffect, useState } from "react";
import { setItem } from "../../utils/localStorage";
import OrderBy from "./OrderBy";
import ImageListComponent from "./ImageListComponent";
import ModalComponent from "./ModalComponent";

const Main = () => {
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false);
  const [imageEdit, setImageEdit] = useState(null);
  const [favouritesList, setFavouritesList] = useState([]);

  const favourites = useSelector((state) => state.favourites.favouritesState);
  const filteredFavs = useSelector((state) => state.favourites.filteredFavs);
  const dispatch = useDispatch();

  const closeModal = () => setOpen(false);

  const editDesc = () => {
    dispatch(editDescription({ imageEdit, description }));
  };

  useEffect(() => {
    if (filteredFavs.length !== 0) {
      setFavouritesList(filteredFavs);
    } else {
      setFavouritesList(favourites);
    }
    setItem("favourites", [...favourites]);
  }, [favourites, filteredFavs]);

  return (
    <main>
      <OrderBy />
      <Typography sx={resultsTitle}>Gallery</Typography>
      {favourites.length === 0 ? (
        <Box>
          <Typography sx={{ textAlign: "center", fontSize: "30px", my: 2}} variant="h1" >
            Your image collection is empty.
          </Typography>
          <Typography sx={{ textAlign: "center", fontSize: "20px"}}   variant="h1" >
             Add new images
          </Typography>
        </Box>
      ) : (
        <Box sx={imageList}>
          <ModalComponent
            open={open}
            closeModal={closeModal}
            setDescription={setDescription}
            description={description}
            editDesc={editDesc}
          />
          {favouritesList ? (
            favouritesList.map((image) => (
              <ImageListComponent
                key={image.id}
                image={image}
                setOpen={setOpen}
                setImageEdit={setImageEdit}
                setDescription={setDescription}
              />
            ))
          ) : (
            <></>
          )}
        </Box>
      )}
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
