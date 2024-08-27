import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "normalize.css";
import "./assets/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import {
  ServiceProvider,
  ModalProvider,
  StaffProvider,
  CustomerProvider,
  BookingProvider,
} from "./contexts";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModalProvider>
      <BookingProvider>
        <CustomerProvider>
          <StaffProvider>
            <ServiceProvider>
              <App />
            </ServiceProvider>
          </StaffProvider>
        </CustomerProvider>
      </BookingProvider>
    </ModalProvider>
  </BrowserRouter>
);
