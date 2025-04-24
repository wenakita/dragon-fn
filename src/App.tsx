import "./App.css";
import { usePrivy } from "@privy-io/react-auth";
import { useWallets } from "@privy-io/react-auth";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Layout from "./compnents/Layout";
import { get_game_config } from "../contract_interactions/contract-reads";
import { useEffect } from "react";
import LockLP from "./pages/LockLP";
import Dashboard from "./pages/user-dashboard/Dashboard";
import VoteMain from "./compnents/voting/VoteMain";
import TestLPLockMenu from "./pages/lock-swap/TestLPLockMenu";
function App() {
  useEffect(() => {
    async function test() {
      const config = await get_game_config();
      console.log("config:", config);
    }
    test();
  });
  //here lets make a single page to connect wallet every time a user triews to access dashboard or lock or vote they must go to login page
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/lock" element={<LockLP />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/vote" element={<VoteMain />} />
            <Route path="/sandbox" element={<TestLPLockMenu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

// @addy: 0x1B6f0901C026776edA4c80156f7C2D4726122112
//function

export default App;
