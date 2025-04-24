import { Tab, Tabs } from "@mui/material";
import React from "react";

function LockSwapTabs() {
  return (
    <div
      className="grid grid-cols-3 w-[93%] text-[14px] font-bold rounded-md border-[#4C5C68] bg-[#2A2B30] m-auto whitespace-nowrap p-2"
      style={{ color: "#B0B3BA" }}
    >
      <button className="">Lock</button>
      <button className="">Increase </button>
      <button>Extend </button>
    </div>
  );
}

export default LockSwapTabs;
