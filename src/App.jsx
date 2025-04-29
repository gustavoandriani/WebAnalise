import { RouterProvider } from "react-router-dom";
import router from "./router";
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
  },
});

function App() {
  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <RouterProvider router={router} />
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default App
