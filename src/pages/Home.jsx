import { Container } from "@mui/material";
import Header from "../components/homeComponents/Header";
import Main from "../components/homeComponents/Main";
import PaginationComp from "../components/homeComponents/PaginationComp";
import Footer from "../components/homeComponents/Footer";
import { ThemeProvider } from "@mui/material";
import theme from "../theme/theme.js";

const container = {
  maxWidth: "100%",
  mx: "auto",
};

const Home = () => {
  
  return (
    <ThemeProvider theme={theme}>
    <Container sx={container} maxWidth={false} disableGutters>
      <Header />
      <Main />
      <PaginationComp/>
      <Footer/>
    </Container>
    </ThemeProvider>
  );
};

export default Home;
