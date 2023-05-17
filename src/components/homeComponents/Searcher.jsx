import { Box, Button, Input, Typography } from "@mui/material";

const searcher = {
  width: "30%",
  mt: 4,
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
  width: "80%",
  pl: 1,
  backgroundColor: "#FFF",
  borderRadius: "2px",
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

const Searcher = () => {
  return (
    <Box sx={searcher}>
      <Typography sx={findImages}>FIND IMAGES</Typography>
      <Input sx={inputSearch} placeholder="add any word" />
      <Button sx={btnSearch}>Search</Button>
    </Box>
  );
};

export default Searcher;
