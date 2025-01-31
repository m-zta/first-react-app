import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

// Import Bootstrap CSS (already correct)
import "bootstrap/dist/css/bootstrap.min.css";

// Import Bootstrap JS for components like modals, tooltips, dropdowns
import "bootstrap/dist/js/bootstrap.bundle.min.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
