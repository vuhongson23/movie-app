import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global/GlobalStyles.scss";
import App from "./App.tsx";
import GlobalStyles from "./styles/global/GlobalStyles.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles>
      <App />
    </GlobalStyles>
  </StrictMode>
);
