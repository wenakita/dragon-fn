import { useEffect, useState } from "react";
import LockSwapInstructions from "./lock-swap/LockSwapInstructions";
import LockSwapper from "./lock-swap/LockSwapper";
import {
  calculateVotingPower,
  verifyApproval,
} from "../../contract_interactions/contract-reads";
import { numericToUnix } from "../time-helper/time-helper";
import {
  approveSending,
  createVeLock,
} from "../../contract_interactions/contract-writes.ts";
import { useWallets } from "@privy-io/react-auth";
import { contracts } from "../../contract_interactions/contracts/contracts.ts";
import { LPTokenABI } from "../../config/LPTokenABI.ts";
function LPLockMenu({ available_pairs }: any) {
  const { wallets } = useWallets();
  const [lockTime, setLockTIme] = useState(0);
  const [token_amount, set_token_amount] = useState(0);
  const [votingPower, setVotingPower] = useState();
  const [isReady, setReady] = useState();
  const [approve, setApprove] = useState(false);

  useEffect(() => {
    if (lockTime > 0 && token_amount > 0) {
      getVotingPower();
    }
  }, [lockTime]);

  //change to prolly use ready to as a dependancy
  useEffect(() => {
    if (approve) {
      lockLP();
    }
  }, [approve]);
  // spender: string,
  // amount: number,
  // approver_address: any,
  // abi: any

  async function lockLP() {
    const unix_time = numericToUnix(lockTime);
    const isApproved: boolean = await verifyApproval(
      wallets[0].address,
      contracts.ve69LP
    );
    if (isApproved) {
      const transaction = await createVeLock(token_amount, unix_time);
    } else {
      console.log("Not Approved!");
      const provider = await wallets[0]?.getEthereumProvider();
      const account = await provider.request({
        method: "eth_requestAccounts",
      });
      approveSending(
        contracts.lpToken,
        [wallets[0].address, contracts.ve69LP],
        LPTokenABI,
        provider,
        account[0]
      );
    }
    return null;
  }

  async function getVotingPower() {
    const unix_time = numericToUnix(lockTime);
    const calculated_voting_power: any = await calculateVotingPower(
      token_amount,
      unix_time
    );
    setVotingPower(calculated_voting_power);
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
            votingPower={votingPower}
          />
        </div>
        <div className="border bg-zinc-900/60 border-zinc-800 rounded-2xl w-full p-7 mt-2 md:mt-0">
          <LockSwapInstructions
            setReady={setReady}
            ready={isReady}
            setApprove={setApprove}
          />
        </div>
      </div>
    </div>
  );
}

export default LPLockMenu;
