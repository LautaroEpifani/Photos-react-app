import { Box, Typography } from '@mui/material'
import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const logo = {
  color: "#FFF",
  fontWeight: 400,
  fontSize:  {
    xs: "15px",
    sm:"25px",
  },
  mb: 0.5,
};

const rights = {
  color: "#FFF",
  fontWeight: 400,
  fontSize:  {
    xs: "10px",
    sm:"15px",
  },
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
        <Box sx={{ display:"flex", gap: "10px"}}>
          <InstagramIcon color="#FFF"/>
          <TwitterIcon color="#FFF"/>
          <FacebookIcon color="#FFF"/>
        </Box>
    </Box>
  )
}

export default Footer