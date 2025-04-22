import { Slider } from "@mui/material";
import LockSwapFooter from "./LockSwapFooter";
import { CiWallet } from "react-icons/ci";
import { calculateVotingPower } from "../../../contract_interactions/contract-reads";
import { numericToUnix } from "../../time-helper/time-helper";
function LockSwapper({
  pair,
  setLockTime,
  setAmount,
  amount,
  lockTime,
  setVotingPower,
  votingPower,
}: any) {
  const handleSliderChange = async (event: Event, newValue: number) => {
    setLockTime(newValue);
  };

  return (
    <div className="">
      <span className="flex justify-between">
        <h2 className="text-white font-extrabold font-mono text-sm ms-2 mb-2">
          Amount to lock
        </h2>
        <span className="flex">
          <CiWallet className="me-2 size-[10px] mt-0.5" />
          <h2 className="text-[10px]">{0.0} DRAGON LP</h2>
        </span>
      </span>
      <div>
        <div className="mt-2 grid grid-cols-7 gap-2 border-1 border-zinc-700/50 px-5  py-3 rounded-xl ">
          <div className="border col-span-1 bg-neutral-900 border-stone-800/70 rounded-2xl p-3.5 w-20">
            <span className="flex justify-center gap-2 text-[10px] whitespace-nowrap ">
              <img src={pair.pair1_logo} alt="" className="size-4" />
              <h3 className="mt-auto mb-auto font-semibold mt-0.5">DRAGON</h3>
            </span>
          </div>
          <div className="col-span-6  grid grid-rows-2">
            <span className="">
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
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              />
            </span>
            <span className="flex justify-end">
              <h3 className="text-xs mt-2">$0.0</h3>
            </span>
          </div>
        </div>
        <div className="m-7">
          <h3 className=" text-sm font-mono font-bold mt-5">
            Locking Dragon LP for{" "}
            {lockTime == 7 ? `${lockTime} days` : `${lockTime} weeks`}
          </h3>
          <h3>Power: {votingPower}</h3>
          {/* <h3 className="text-xs mt-2">voting power: </h3> */}
          <span>
            <Slider
              defaultValue={7}
              step={7}
              min={7}
              max={60}
              valueLabelDisplay="auto"
              value={lockTime}
              onChange={handleSliderChange}
              className="mt-2"
              sx={{
                color: "#2B2B2B",
              }}
              style={{
                height: "9px", // Increases the height of the slider
              }}
            />
          </span>
        </div>
        <div className="mt-5 m-2">
          <LockSwapFooter />
        </div>
      </div>
    </div>
  );
}

export default LockSwapper;
