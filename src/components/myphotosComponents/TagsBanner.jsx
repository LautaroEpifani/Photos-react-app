import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const tags = [
  "animals",
  "portrait",
  "landscape",
  "sports",
  "comedy",
  "food",
  "3D",
  "Vfx",
];

const boxTags = {
  width: "100%",
  mx: "auto",
  py: 1,
  backgroundColor: "#FFF",
  borderBottom: 1,
  borderColor: "#000",
  display: "flex",
  gap: "30px",
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
};

const tagsText = {
  fontSize: {
    xs:"10px",
    md: "12px",
    lg: "15px",
  }
}

const TagsBanner = () => {
  return (
    <Box sx={boxTags}>
      {tags.map((tag) => (
        <Chip sx={tagsText} label={tag} variant="outlined"/>
      ))}
    </Box>
  );
};

export default TagsBanner;
