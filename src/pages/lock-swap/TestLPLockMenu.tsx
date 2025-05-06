import { Card, CardContent } from "@mui/material";
import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import VotingPowerCard from "./VotingPowerCard";
import LockSwapTabs from "./LockSwapTabs";
import LockSwapModal from "./LockSwapModal";
import imgUrl from "../../assets/3dDragon.png";
function TestLPLockMenu() {
  return (
    <div className=" container p-3 flex justify-center ">
      <div className="max-w-150   grid lg:grid-flow-col lg:gap-3">
        <div className="p-3 visible lg:hidden">
          <VotingPowerCard />
        </div>
        <div className="mt-4 flex  justify-center">
          <LockSwapTabs />
        </div>
        <div className="invisible lg:visible mt-20">
          <VotingPowerCard />
        </div>
      </div>
    </div>
  );
}

export default TestLPLockMenu;
