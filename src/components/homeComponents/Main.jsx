import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ImageListComponent from "./ImageListComponent";
import { useSelector } from "react-redux";

const Main = () => {
  const [initialImages, setInitialImages] = useState([]);
  const searchResults = useSelector((state) => state.search.results);

  useEffect(() => {
    const initialFetch = async () => {
      const API_KEY = process.env.REACT_APP_UNSPLASH_API_KEY;
      try {
        const response = await fetch(
          `https://api.unsplash.com/photos/?client_id=${API_KEY}`
        );
        const json = await response.json();
        if (response.ok) {
          setInitialImages(json);
        } else {
          console.log("Error HTTP REQUEST");
        }
      } catch (error) {
        console.log("Error fetch request:" + error.message);
      }
    };
    initialFetch();
  }, []);

  return (
    <main>
      <Typography sx={resultsTitle}>Results</Typography>
      <Box sx={imageList}>
        {searchResults
          ? searchResults.map((image, index) => (
              <ImageListComponent key={image.id} image={image} index={index} />
            ))
          : initialImages.map((image, index) => (
              <ImageListComponent key={image.id} image={image} index={index} />
            ))}
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
