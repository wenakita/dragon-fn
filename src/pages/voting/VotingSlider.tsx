import { Slider } from "@mui/material";
import React from "react";

interface Props {}

function VotingSlider({ partner, state, setState }: any) {
  return (
    <div className=" border border-[#4C5C68] bg-[#1E1F23]  rounded-lg grid-flow-row p-3">
      <h3 className="text-xs font-extrabold text-white/60">Vote</h3>
      <span className="flex gap-2">
        <h3 className="text-xl font-extrabold mt-2">{partner && partner[1]}</h3>
        <h3 className="text-sm font-medium  mt-[14.7px] text-white/60">
          {state.amount}%
        </h3>
      </span>
      <span className=" mt-2 flex justify-center">
        <Slider
          defaultValue={0}
          step={100}
          value={state.amount}
          onChange={(event: Event, newValue: number) => {
            setState((prev: any) => ({
              ...prev,
              amount: newValue,
            }));
          }}
          sx={{
            width: "90%",
            color: "#FF6B00",
          }}
        />
      </span>
      <span className="mt-3 p-1 flex justify-start gap-3 font-bold  text-white/100 text-sm ">
        <button
          type="button"
          className="border border-[#FF6B00]/50 bg-[#FF6B00]/90 font-extrabold p-1 px-5 rounded-lg"
          onClick={() => {
            setState((prev: any) => ({
              ...prev,
              amount: 100,
            }));
          }}
        >
          Max Votes
        </button>
      </span>
    </div>
  );
}

export default VotingSlider;
