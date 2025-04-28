import { Slider } from "@mui/material";
import React from "react";

interface Props {}

function VotingSlider() {
  return (
    <div className=" border border-[#4C5C68] bg-[#2A2B30]  rounded-lg grid-flow-row p-3">
      <h3 className="text-xs font-extrabold">Vote</h3>
      <span className="flex gap-2">
        <h3 className="text-xl font-extrabold mt-2">99DRAGON 1wS</h3>
        <h3 className="text-sm font-semibold  mt-3.5">23%</h3>
      </span>
      <span className=" mt-2">
        <Slider defaultValue={50} />
      </span>
      <span className="mt-3 flex justify-start gap-3 font-semibold text-sm">
        <div className="border p-1 px-3 rounded-lg">25%</div>
        <div className="border p-1 px-3 rounded-lg">50%</div>
        <div className="border p-1 px-3 rounded-lg">75%</div>
        <div className="border p-1 px-3 rounded-lg">Max</div>
      </span>
    </div>
  );
}

export default VotingSlider;
