import { Box, Typography } from '@mui/material'
import React from 'react'

const logo = {
  color: "#FFF",
  fontWeight: 400,
  fontSize: "25px",
  mb: 0.5,
};

const rights = {
  color: "#FFF",
  fontWeight: 400,
  fontSize: "15px",
};

const Footer = () => {
  return (
    <Box sx={{ width: "100%" , pl: 5, py: 1, backgroundColor: "#B5D7FF"}}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography sx={logo} variant="h1">
            Photos App
          </Typography>
            <Typography sx={rights}>
            ® all rights reserved 2023
          </Typography>
        </Box>
      
    </Box>
  )
}

export default Footer