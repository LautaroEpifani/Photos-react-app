import { Container } from "@mui/material";
import Header from "../components/homeComponents/Header";
import Main from "../components/homeComponents/Main";
import PaginationComp from "../components/homeComponents/PaginationComp";
import Footer from "../components/homeComponents/Footer";

const container = {
  maxWidth: "100%",
  mx: "auto",
};

const Home = () => {
  return (
    <Container sx={container} maxWidth={false} disableGutters>
      <Header />
      <Main />
      <PaginationComp/>
      <Footer/>
    </Container>
  );
};

export default Home;
