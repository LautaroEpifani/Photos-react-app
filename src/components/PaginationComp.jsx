import { Box, Pagination} from '@mui/material'
import React from 'react'

const containerPag = {
  my: 10,
  display: "flex",
  justifyContent: "center",
}

const PaginationComp = () => {
  return (
    <Box sx={containerPag}>
      <Pagination  count={10} color="primary" />
    </Box>
    
  )
}

export default PaginationComp