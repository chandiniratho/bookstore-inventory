// src/index.tsx (or index.js)
import React from "react";
import ReactDOM from "react-dom/client"; // Import createRoot from 'react-dom/client'
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement); // Use createRoot
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
