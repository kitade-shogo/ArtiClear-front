import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, NextUIProvider } from "@nextui-org/react";

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      // brand colors
      primaryLight: "$green200",
      primaryLightHover: "$green300",
      primaryLightActive: "$green400",
      primaryLightContrast: "$green600",
      primary: "#4ADE7B",
      primaryBorder: "$green500",
      primaryBorderHover: "$green600",
      primarySolidHover: "$green700",
      primarySolidContrast: "$white",
      primaryShadow: "$green500",

      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      link: "#5E1DAD",

      // you can also create your own color
      myColor: "#ff4ecd",

      // ...  more colors
      background: '',
    },
    space: {},
    fonts: {},
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <NextUIProvider theme={theme}>
      <App />
    </NextUIProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
