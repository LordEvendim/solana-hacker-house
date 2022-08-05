import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Center } from "@chakra-ui/react";

import { NavigationBar } from "./components/NavigationBar";
import { Mainpage } from "./components/pages/Mainpage";
import { useApplicationInitialization } from "./modules/initialization/useApplicationInitialization";
import { Dashboard } from "./components/pages/Dashboard";
import { useWallet } from "./hooks/useWallet";
import { TransactionHistory } from "./components/pages/TransactionHistory";
import { NFTs } from "./components/pages/NFTs";
// import { useWallet } from "./hooks/useWallet";

const App: React.FC<{}> = () => {
  const status = useApplicationInitialization();
  const [, connectWallet] = useWallet();

  useEffect(() => {
    connectWallet();
  }, [connectWallet]);

  switch (status.status) {
    case "failed":
      return <div>Failed to initalize application</div>;
    case "loading":
      return <div>Loading...</div>;
    case "succeeded":
      return (
        <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <NavigationBar />
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/transaction-history"
              element={<TransactionHistory />}
            />
            <Route path="/nfts" element={<NFTs />} />
          </Routes>
        </>
      );
    default:
      return <Center>Application has failed!</Center>;
  }
};

export default App;
