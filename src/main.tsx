import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";
import "./global/styles/index.module.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </StrictMode>
);
