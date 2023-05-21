import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { sortFavourites } from "../../features/favourites/favouritesSlice";

const OrderBy = () => {
  const [age, setAge] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setAge(event.target.value);
    dispatch(sortFavourites(event.target.value));
  };

  return (
    <Box sx={{ width: "20%", ml: 20 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Order By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="date">Date</MenuItem>
          <MenuItem value="width">Width</MenuItem>
          <MenuItem value="height">Height</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default OrderBy;
