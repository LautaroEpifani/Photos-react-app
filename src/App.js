import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Home from './components/Home'

const theme = createTheme({
  typography: {
    // h4: {
      fontFamily: [
      'Raleway',
      'sans-serif',
    ].join(','),
    // },
  },});

function App() {

  return (
    <>
    <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Home/>
      </ThemeProvider>
     </>   
  );
}

export default App;
