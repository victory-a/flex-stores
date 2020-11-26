import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "styles";
import App from "./App";

import { ReactQueryConfigProvider } from "react-query";

// react query config
const queryConfig = {
  queries: {
    retry: 3,
    throwOnError: false,
    useErrorBoundary: false,
    refetchOnWindowFocus: false
  }
};

ReactDOM.render(
  // <React.StrictMode>
  <ReactQueryConfigProvider config={queryConfig}>
    <GlobalStyles />
    <App />
  </ReactQueryConfigProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
