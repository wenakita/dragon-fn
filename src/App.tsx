import "./App.css";
import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./compnents/Layout";
import { get_game_config } from "../contract_interactions/contract-reads";
import { useEffect } from "react";
import LockLP from "./pages/LockLP";
function App() {
  useEffect(() => {
    async function test() {
      const config = await get_game_config();
      console.log("config:", config);
    }
    test();
  });
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/lock" element={<LockLP />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// @addy: 0x1B6f0901C026776edA4c80156f7C2D4726122112
//function

export default App;
