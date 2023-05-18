import { Box, Pagination} from '@mui/material'
import React from 'react'

const containerPag = {
  my: 10,
  textAlign: "center",
  pl: {
    xs: "0%",
    sm: "39%"
  },
}

const PaginationComp = () => {
  return (
    <Box sx={containerPag}>
      <Pagination  count={10} color="primary" />
    </Box>
    
  )
}

export default PaginationComp