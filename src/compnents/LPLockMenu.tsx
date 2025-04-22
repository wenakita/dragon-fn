import { useEffect, useState } from "react";
import LockSwapInstructions from "./lock-swap/LockSwapInstructions";
import LockSwapper from "./lock-swap/LockSwapper";
import { calculateVotingPower } from "../../contract_interactions/contract-reads";
import { numericToUnix } from "../time-helper/time-helper";
function LPLockMenu({ available_pairs }: any) {
  const [lockTime, setLockTIme] = useState(0);
  const [token_amount, set_token_amount] = useState(0);
  const [votingPower, setVotingPower] = useState("0");
  const [isReady, setReady] = useState();

  useEffect(() => {
    if (lockTime && token_amount > 0) {
      getVotingPower();
    }
  }, [lockTime]);

  async function getVotingPower() {
    const unix_time = numericToUnix(lockTime);
    const calculated_voting_power: any = await calculateVotingPower(
      token_amount,
      unix_time
    );
    setVotingPower(`${calculated_voting_power}`);
  }
  //loading animation when lock lp clicked
  return (
    <div className="text-white  container p-0 md:p-1">
      {/* <h1 className="mt-4 text-xs text-gray-400">Available Locks</h1> */}
      <div className=" grid grid-flow-row md:grid-cols-3 gap-2 md:m-8">
        <div className=" border bg-zinc-900/60 border-zinc-800 rounded-2xl p-12 md:col-span-2">
          <LockSwapper
            pair={available_pairs[0]}
            setLockTime={setLockTIme}
            setAmount={set_token_amount}
            amount={token_amount}
            lockTime={lockTime}
            setVotingPower={setVotingPower}
            votingPower={votingPower}
          />
        </div>
        <div className="border bg-zinc-900/60 border-zinc-800 rounded-2xl w-full p-7 mt-2 md:mt-0">
          <LockSwapInstructions setReady={setReady} ready={isReady} />
        </div>
      </div>
    </div>
  );
}

export default LPLockMenu;
