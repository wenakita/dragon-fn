import { Slider } from "@mui/material";
import React from "react";

interface Props {}

function VotingSlider({ stat }: any) {
  return (
    <div className=" border border-[#4C5C68] bg-[#2A2B30]  rounded-lg grid-flow-row p-3">
      <h3 className="text-xs font-extrabold text-white/60">Vote</h3>
      <span className="flex gap-2">
        <h3 className="text-xl font-extrabold mt-2">99DRAGON 1wS</h3>
        <h3 className="text-sm font-bold  mt-[14.7px] text-white/60">23%</h3>
      </span>
      <span className=" mt-2 flex justify-center">
        <Slider
          defaultValue={50}
          sx={{
            width: "90%",
          }}
        />
      </span>
      <span className="mt-3 flex justify-start gap-3 font-bold text-sm text-white/80 ">
        <button className="border border-[#FF6B00] bg-[#FF6B00]/70 p-1 px-3 rounded-lg">
          25%
        </button>
        <button className="border border-[#FF6B00] bg-[#FF6B00]/70 hover:bg-[#FF6B00]/65 p-1 px-3 rounded-lg">
          50%
        </button>
        <button className="border border-[#FF6B00] bg-[#FF6B00]/70 p-1 px-3 rounded-lg">
          75%
        </button>
        <button className="border border-[#FF6B00] bg-[#FF6B00]/70 p-1 px-3 rounded-lg">
          Max
        </button>
      </span>
    </div>
  );
}

export default VotingSlider;
