import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppProvider from "./components/Providers/AppProvider";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { SolWalletProvider } from "./contexts/sol.context";

createRoot(document.getElementById("root")!).render(
  <StrictMode>

    <AppProvider>
      <SolWalletProvider>

      <RouterProvider router={router} />
      </SolWalletProvider>
    </AppProvider>
  </StrictMode>
);
