import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearch } from "../../features/search/searchSlice";

const Searcher = () => {
  const [searchText, setSearchText] = useState(null);
  const dispatch = useDispatch();

  return (
    <Box sx={searcher}>
      <Typography sx={findImages}>FIND IMAGES</Typography>
      <Input
        onChange={(e) => setSearchText(e.target.value)}
        sx={inputSearch}
        placeholder="add any word"
      />
      <Button onClick={() => dispatch(fetchSearch(searchText))} sx={btnSearch}>
        Search
      </Button>
    </Box>
  );
};

export default Searcher;

const searcher = {
  width: {
    xs: "40%",
    sm: "30%",
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
  mb: {
    xs: 2,
    sm: 0,
  },
  py: 0.5,
  width: {
    xs: "100%",
    sm: "80%",
  },
  pl: 1,
  backgroundColor: "#FFF",
  borderRadius: "2px",
  fontSize: {
    xs: "10px",
    lg: "15px",
  },
  boxShadow: 1,
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
