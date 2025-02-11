import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TemplateLayout } from "./components";
import "./styles.css";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={styles}>
      <TemplateLayout />
    </div>
  </StrictMode>
);
