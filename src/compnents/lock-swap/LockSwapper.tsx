import { Slider } from "@mui/material";
import { useState } from "react";
import LockSwapFooter from "./LockSwapFooter";
import { calculateVotingPower } from "../../../contract_interactions/contract-reads";
function LockSwapper({ pair, set, value }: any) {
  const [lockTime, setLockTime] = useState(1);

  const handleSliderChange = (event: Event, newValue: number) => {
    set(newValue);
  };

  return (
    <div>
      <div className="border bg-zinc-900 border-zinc-800 rounded-md p-3">
        <h2 className="text-white font-extrabold font-mono text-sm ms-2 mb-2">
          Amount to lock
        </h2>
        <div>
          <div className="mt-2 grid grid-cols-7 gap-2 border-1 border-zinc-700 px-5  py-3 rounded-lg ">
            <div className="border col-span-1 bg-neutral-900  border-stone-800 rounded-xl p-3.5 w-20">
              <span className="flex justify-center gap-2 text-[12px] whitespace-nowrap ">
                <img src={pair.pair1_logo} alt="" className="size-4" />
                <h3 className="mt-auto mb-auto font-bold">DRAGON</h3>
              </span>
            </div>
            <div className="col-span-6 ">
              <input
                type="text"
                name="a"
                id=""
                className="m-auto h-full w-full input-lock"
                placeholder="0"
                style={{
                  direction: "rtl",
                  textAlign: "right",
                  outline: "none",
                }}
              />
            </div>
          </div>
          <div className="m-7">
            <h3 className=" text-sm font-mono font-bold mt-5">
              Locking Dragon LP for{" "}
              {value == 7 ? `${value} days` : `${value} weeks`}
            </h3>
            <h3 className="text-xs mt-2">voting power: </h3>
            <span>
              <Slider
                defaultValue={7}
                step={7}
                min={7}
                max={60}
                valueLabelDisplay="auto"
                value={value}
                onChange={handleSliderChange}
                className="mt-2"
                style={{
                  height: "9px", // Increases the height of the slider
                }}
              />
            </span>
          </div>
          <div className="mt-5 m-5">
            <LockSwapFooter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LockSwapper;
