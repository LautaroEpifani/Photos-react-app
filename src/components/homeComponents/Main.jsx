import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectSearch } from "../../features/search/searchSlice";

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
    gap: "20px"
}

const imageItem = {
    width: "32%",
}

const Main = () => {
  const searchResults = useSelector((state) => state.search.results);
  console.log(searchResults)
  return (
    <main>
      <Typography sx={resultsTitle}>Results for images</Typography>
      <Box sx={imageList}>
            {searchResults.map((item) => (
                <ImageListItem sx={imageItem} key={item.id}>
                <img 
                    src={item.urls.small}
                    alt={item.alt_description}
                    loading="lazy"
                />
                </ImageListItem>
            ))}
      </Box>
    </main>
  );
};

export default Main;
