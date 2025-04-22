import { CiLock } from "react-icons/ci";
import LockList from "./LockList";
import { FiCheck } from "react-icons/fi";

function LockSwapInstructions({ setReady, ready, setApprove }: any) {
  return (
    <div className="">
      <h3 className="mb-5 font-semibold p-3">Locking LP Tokens</h3>
      <span className="">
        <LockList />
      </span>
      <span className="flex gap-2">
        <button
          className="border border-stone-900 bg-zinc-800 hover:bg-zinc-800/50 w-full p-2 text-xs rounded-md font-bold"
          onClick={() => {
            setApprove(true);
          }}
        >
          <span className="flex justify-center gap-1">
            <FiCheck className="mt-0.5 font-bold" />
            <h2>Verify Approval</h2>
          </span>
        </button>
        <button
          className="border border-stone-900 bg-zinc-800 hover:bg-zinc-800/50 w-full p-2 text-xs rounded-md font-bold"
          onClick={() => {
            setReady(true);
          }}
        >
          <span className="flex justify-center gap-1">
            <CiLock className="mt-0.5 font-bold" />
            <h2>Lock LP</h2>
          </span>
        </button>
      </span>
    </div>
  );
}

export default LockSwapInstructions;
