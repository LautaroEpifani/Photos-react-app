import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme/theme";
import Home from "./pages/Home.jsx";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
    </>
  );
}

export default App;
