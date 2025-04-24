import { Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import LockSwapModal from "./LockSwapModal";

function LockSwapTabs() {
  const [active, setActive] = useState("lock");

  const handleLock = () => {
    active == "lock" ? null : setActive("lock");
  };

  const handleIncrease = () => {
    active == "increase" ? null : setActive("increase");
  };
  const handleExtend = () => {
    active == "extend" ? null : setActive("extend");
  };

  return (
    <div>
      <div
        className="grid grid-cols-3 w-[93%] text-[14px] font-bold rounded-md  m-auto whitespace-nowrap p-2"
        style={{ color: "#B0B3BA" }}
      >
        <button
          className="border-[#4C5C68] bg-[#2A2B30] hover:bg-[#232428] p-1.5 rounded-l-md"
          onClick={handleLock}
        >
          Lock
        </button>
        <button
          className="border-[#4C5C68] bg-[#2A2B30] hover:bg-[#232428] p-1.5"
          onClick={handleIncrease}
        >
          Increase{" "}
        </button>
        <button
          className="border-[#4C5C68] bg-[#2A2B30] hover:bg-[#232428] p-1.5 rounded-r-md"
          onClick={handleExtend}
        >
          Extend{" "}
        </button>
      </div>
      <div className="mt-3 p-2 w-full ">
        {active && <LockSwapModal type={active} />}
      </div>
    </div>
  );
}

export default LockSwapTabs;
