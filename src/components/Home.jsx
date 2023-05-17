import { Box, Button, Card, Container, Grid, Typography } from "@mui/material";

const container = {
  maxWidth: "100%",
  mx: "auto",
};

const header = {
  backgroundColor: "#4E90DE",
  py: "20px",
};

const font600 = {
  fontWeight: 600,
  textTransform: "uppercase",
}

const font400 = {
  fontWeight: 400
}

const sxCards = {};

const Home = () => {
  return (
    <>
      <Container sx={container} maxWidth={false} disableGutters>
        <header>
          <Container sx={header} maxWidth={false} disableGutters>
            <Typography sx={font600} variant="h4" align="center" color="#FFF">
              Find Images
            </Typography>
          </Container>
        </header>
        <main>
          <Typography sx={font400} variant="h5" align="center" color="primary">
            Results for images
          </Typography>
          <Box sx={sxCards}></Box>
        </main>
      </Container>
    </>
  );
};

export default Home;
