// src/index.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme"; // or './theme.jsx'

createRoot(document.getElementById("app")).render(
  <StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </StrictMode>
);
