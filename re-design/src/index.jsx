import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ElementHomepage } from "./screens/ElementHomepage";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <ElementHomepage />
  </StrictMode>,
);
