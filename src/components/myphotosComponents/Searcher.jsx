import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterByDescription } from "../../features/favourites/favouritesSlice";

const Searcher = () => {

  const [description, setDescription] = useState("")
  const dispatch = useDispatch()

  const searchDescription = () => {
    dispatch(filterByDescription(description))
  }
  
  return (
    <Box sx={searcher}>
      <Typography sx={findImages}>MY PHOTOS</Typography>
      <Input onChange={(e) => setDescription(e.target.value)} sx={inputSearch} placeholder="add any description" />
      <Button onClick={() => searchDescription()} sx={btnSearch}>Search</Button>
    </Box>
  );
};

export default Searcher;


const searcher = {
  width: {
    xs: "40%",
    sm: "30%"
  },
  mt: 12,
  mb: 16,
  textAlign: "center",
};

const findImages = {
  color: "#FFF",
  fontWeight: 500,
  fontSize: "25px",
};

const inputSearch = {
  mt: 2,
  py: 0.5,
  width: {
    xs:"100%",
    sm:"80%"
  },
  mb: {
    xs: 2,
    sm: 0
  },
  pl: 1,
  backgroundColor: "#FFF",
  borderRadius: "2px",
  fontSize: {
    xs:"10px",
    lg: "15px"
  },
  boxShadow: 1
};

const btnSearch = {
  backgroundColor: "#79919B",
  color: "#FFF",
  py: 1,
  borderRadius: "2px",
  boxShadow: 1,
  textTransform: "none",
  mb: 0.4,
};