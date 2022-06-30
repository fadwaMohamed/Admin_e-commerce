import { createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { pink } from "@mui/material/colors";
import { orange } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: pink,
    success: orange
  },
});

export default theme;
