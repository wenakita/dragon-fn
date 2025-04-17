import { useState } from "react";
import LockSwapInstructions from "./lock-swap/LockSwapInstructions";
import LockSwapper from "./lock-swap/LockSwapper";
import { calculateVotingPower } from "../../contract_interactions/contract-reads";
function LPLockMenu({ available_pairs }: any) {
  const [lPInput, setLpInput] = useState(0);
  const [token_amount, set_token_amount] = useState(0);
  return (
    <div className="text-white  container p-5 m-auto">
      <h1 className="font-semibold text-lg">Lock Liquidty</h1>
      {/* <h1 className="mt-4 text-xs text-gray-400">Available Locks</h1> */}
      <div className="mt-5  grid grid-rows-2 lg:grid-cols-2 gap-2">
        <div className="">
          <LockSwapper
            pair={available_pairs[0]}
            set={setLpInput}
            setAmount={set_token_amount}
            value={lPInput}
          />
        </div>
        <div className="border bg-zinc-900 border-zinc-800 rounded-md p-3">
          <LockSwapInstructions input={token_amount} />
        </div>
      </div>
    </div>
  );
}

export default LPLockMenu;
