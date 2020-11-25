import React from "react";
import ReactDOM from "react-dom";
// import { ReactQueryDevtools } from "react-query-devtools";

import { ReactQueryConfigProvider } from "react-query";
import GlobalStyles from "styles";
import App from "./App";

const queryConfig = {
  queries: {
    retry: 1,
    throwOnError: false,
    useErrorBoundary: false,
    refetchOnWindowFocus: false
  }
};

ReactDOM.render(
  <React.StrictMode>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}

    <ReactQueryConfigProvider config={queryConfig}>
      <GlobalStyles />
      <App />
    </ReactQueryConfigProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
