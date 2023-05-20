import { Container } from "@mui/material";
import Header from "../components/myphotosComponents/Header";
import Main from "../components/myphotosComponents/Main";
import PaginationComp from "../components/PaginationComp";
import Footer from "../components/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme.js";


const container = {
  maxWidth: "100%",
  mx: "auto",
};

const MyPhotos = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container sx={container} maxWidth={false} disableGutters>
      <Header />
      <Main />
      <PaginationComp/>
      <Footer/>
    </Container>
    </ThemeProvider>
  )
}

export default MyPhotos