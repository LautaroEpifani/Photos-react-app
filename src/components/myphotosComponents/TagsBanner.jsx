import { Box, Chip, Typography } from "@mui/material";
import React from "react";

const TagsBanner = () => {
  return (
    <Box sx={boxTags}>
      {tags.map((tag, index) => (
        <Chip key={index} sx={tagsText} label={tag} variant="outlined" />
      ))}
    </Box>
  );
};

export default TagsBanner;

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
  boxShadow: 2,
};

const tagsText = {
  fontSize: {
    xs: "10px",
    md: "12px",
    lg: "15px",
  },
};
