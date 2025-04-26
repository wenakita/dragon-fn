import { Card, CardContent } from "@mui/material";
import React from "react";
import { FaBoltLightning } from "react-icons/fa6";
import VotingPowerCard from "./VotingPowerCard";
import LockSwapTabs from "./LockSwapTabs";
import LockSwapModal from "./LockSwapModal";
import imgUrl from "../../assets/3dDragon.png";
function TestLPLockMenu() {
  return (
    <div className=" container p-3 m-auto ">
      <div className="max-w-150 m-auto ">
        <div className="p-3">
          <VotingPowerCard />
        </div>
        <div className="mt-4 ">
          <LockSwapTabs />
        </div>
        <div className="xxs:hidden relative left-120 bottom-90">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  );
}

export default TestLPLockMenu;
