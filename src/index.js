import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import App from "./App";
import CartControl from "contexts/CartControl";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <CartControl>
      <App />
    </CartControl>
  </React.StrictMode>,
  document.getElementById("root")
);
