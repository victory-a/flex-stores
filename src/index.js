import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import App from "./App";
import InventoryProvider from "contexts/Inventory";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <InventoryProvider>
      <App />
    </InventoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
