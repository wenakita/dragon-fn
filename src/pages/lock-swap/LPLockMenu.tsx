import { useTokenLock } from "../../hooks/useTokenLock";
import LockSwapInstructions from "./LockSwapInstructions";
import LockSwapper from "./LockSwapper";
import TXPopup from "./TXPopup";
function LPLockMenu({ available_pairs }: any) {
  const {
    lockTime,
    setLockTime,
    tokenAmount,
    setTokenAmount,
    votingPower,
    isReady,
    setReady,
    approve,
    setApprove,
    wasApproved,
    txComplete,
    setTxComplete,
  }: any = useTokenLock();
  //loading animation when lock lp clicked
  return (
    <div className="text-white  container p-0 md:p-1">
      {/* <h1 className="mt-4 text-xs text-gray-400">Available Locks</h1> */}
      <div className=" grid grid-flow-row md:grid-cols-3 gap-2 md:m-8">
        <div className=" border bg-[#1E1F24] border-zinc-800 rounded-2xl p-12 md:col-span-2">
          <LockSwapper
            pair={available_pairs[0]}
            setLockTime={setLockTime}
            setAmount={setTokenAmount}
            amount={tokenAmount}
            lockTime={lockTime}
            votingPower={votingPower}
          />
        </div>
        <div className="absolute">
          <TXPopup
            txComplete={txComplete}
            ready={isReady}
            setReady={setReady}
          />
        </div>
        <div className="border bg-zinc-900/60 border-zinc-800 rounded-2xl w-full p-7 mt-2 md:mt-0">
          <LockSwapInstructions
            setReady={setReady}
            ready={isReady}
            setApprove={setApprove}
            wasApproved={wasApproved}
          />
        </div>
      </div>
    </div>
  );
}

export default LPLockMenu;
