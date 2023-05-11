import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#FF55BB",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: "Inter",
    body1: {
      fontSize: 14,
      fontWeight: "600",
      lineHeight: "24px",
    },
    body2: {
      fontSize: 10,
      fontWeight: "600",
      lineHeight: "14px",
    },
    body3: {
      fontSize: 24,
      fontWeight: "300",
      lineHeight: "56px",
    },
    h2: {
      fontSize: 36,
      fontWeight: "500",
      lineHeight: "56px",
    },
    h6: {
      fontSize: 11,
      fontWeight: "600",
      lineHeight: "24px",
    },
    h4: {
      fontSize: 20,
      fontWeight: "600",
      lineHeight: "27px",
    },
  },
});
export default theme;
