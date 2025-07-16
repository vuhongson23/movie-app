import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import App from "./App.tsx";
import GlobalStyles from "./styles/global/GlobalStyles.tsx";
import "./styles/global/GlobalStyles.scss";
import { BrowserRouter } from "react-router-dom";
import store from "./store/store.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles>
          <App />
        </GlobalStyles>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
