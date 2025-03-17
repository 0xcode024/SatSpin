import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import {
  LaserEyesProvider,
  MAINNET,
  TESTNET4,
  TESTNET,
} from "@omnisat/lasereyes";
import routes from "@/routes";

import "@/styles/index.scss";
import "swiper/css";
import { Toaster } from "sonner";
import AuthContextProvider from "./context/AuthContext";
import { PUBLIC_NETWORK } from "./constants/config";
import { AccountContextProvider } from "./context/AccountContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LaserEyesProvider
        config={{
          network: PUBLIC_NETWORK as
            | "mainnet"
            | "testnet"
            | "testnet4"
            | "signet"
            | "fractal mainnet"
            | "fractal testnet",
        }}
      >
        <AccountContextProvider>
          <AuthContextProvider>
            <RouterProvider router={routes} />
            <Toaster position="top-right" expand={false} />
          </AuthContextProvider>
        </AccountContextProvider>
      </LaserEyesProvider>
    </ThemeProvider>
  );
};

export default App;
