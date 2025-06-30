import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementHomepage } from "./screens/ElementHomepage";
import "./index.css";
import "./responsive.css";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ElementHomepage />
  </StrictMode>,
);
