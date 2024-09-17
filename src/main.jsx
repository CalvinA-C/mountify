import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./styles/global.css";

// Create a root.
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render the App component into the root.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
