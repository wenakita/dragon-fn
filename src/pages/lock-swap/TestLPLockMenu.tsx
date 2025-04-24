import { Card, CardContent } from "@mui/material";
import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import VotingPowerCard from "./VotingPowerCard";
import LockSwapTabs from "./LockSwapTabs";
function TestLPLockMenu() {
  return (
    <div className="p-1 border container p-4 m-auto">
      <VotingPowerCard />

      <LockSwapTabs />
    </div>
  );
}

export default TestLPLockMenu;
