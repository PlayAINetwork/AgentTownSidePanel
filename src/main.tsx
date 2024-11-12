import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./components/Providers/AppProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { EvmWalletProvider } from "./components/Providers/EvmWalletProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

      <EvmWalletProvider>
    <AppProvider>

      <RouterProvider router={router} />
    </AppProvider>
      </EvmWalletProvider>
  </StrictMode>
);
