import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { ServiceProvider } from "./contexts/serviceSlice";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ServiceProvider>
      <App />
    </ServiceProvider>
  </BrowserRouter>
);
