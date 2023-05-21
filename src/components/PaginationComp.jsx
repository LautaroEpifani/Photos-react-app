import { Box, Pagination } from "@mui/material";

const PaginationComp = () => {
  return (
    <Box sx={containerPag}>
      <Pagination count={10} color="primary" />
    </Box>
  );
};

export default PaginationComp;

const containerPag = {
  my: 10,
  display: "flex",
  justifyContent: "center",
};
