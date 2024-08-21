import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ServiceProvider, ModalProvider } from "./contexts";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModalProvider>
      <ServiceProvider>
        <App />
      </ServiceProvider>
    </ModalProvider>
  </BrowserRouter>
);
