import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TemplateLayout } from "./components";
import "./styles.css";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh", // Asegura que el contenedor ocupe toda la pantalla
  overflow: "hidden",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={styles}>
      <TemplateLayout />
    </div>
  </StrictMode>
);
