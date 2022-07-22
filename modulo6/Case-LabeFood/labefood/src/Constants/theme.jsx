import { createTheme } from "@mui/material";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: green[900],
    },
  },
});

export default theme;
