import { useState } from "react";
import LockSwapInstructions from "./lock-swap/LockSwapInstructions";
import LockSwapper from "./lock-swap/LockSwapper";
import { calculateVotingPower } from "../../contract_interactions/contract-reads";
function LPLockMenu({ available_pairs }: any) {
  const [lPInput, setLpInput] = useState(0);
  const [token_amount, set_token_amount] = useState(0);

  function handleTXConfirmBTN() {}

  return (
    <div className="text-white  container p-0 md:p-1 m-auto">
      {/* <h1 className="mt-4 text-xs text-gray-400">Available Locks</h1> */}
      <div className=" grid grid-rows-2 lg:grid-cols-3 gap-2">
        <div className=" border bg-zinc-900/60 border-zinc-800 rounded-2xl p-12 md:col-span-2">
          <LockSwapper
            pair={available_pairs[0]}
            set={setLpInput}
            setAmount={set_token_amount}
            value={lPInput}
          />
        </div>
        <div className="border bg-zinc-900/60 border-zinc-800 rounded-2xl p-7 mt-2 md:mt-0">
          <LockSwapInstructions input={token_amount} />
        </div>
      </div>
    </div>
  );
}

export default LPLockMenu;
