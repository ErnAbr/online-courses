import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ErrorBoundry } from "./error-boundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundry fallback={<h1>Error at App Level</h1>}>
      <App />
    </ErrorBoundry>
  </React.StrictMode>
);
