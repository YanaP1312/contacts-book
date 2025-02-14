import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import "modern-normalize";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <HelmetProvider>
            <App />
            <Toaster position="bottom-right" reverseOrder={false} />
          </HelmetProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
