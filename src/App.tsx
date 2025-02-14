import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";
import { LaserEyesProvider, MAINNET, TESTNET4, TESTNET } from '@omnisat/lasereyes';
import routes from "@/routes";

import "@/styles/index.scss";
import "swiper/css";
import { Toaster } from "sonner";
import AuthContextProvider from "./context/AuthContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LaserEyesProvider config={{ network: MAINNET }}>
      <AuthContextProvider>
        <RouterProvider router={routes} />
        <Toaster position="top-right" expand={false} />
      </AuthContextProvider>
      </LaserEyesProvider>
    </ThemeProvider>
  );
};

export default App;
