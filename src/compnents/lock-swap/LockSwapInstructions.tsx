import { CiLock } from "react-icons/ci";
import LockList from "./LockList";

function LockSwapInstructions({ setReady, ready }: any) {
  return (
    <div className="">
      <h3 className="mb-5 font-semibold p-3">Locking LP Tokens</h3>
      <span className="">
        <LockList />
      </span>
      <span>
        <button
          className="border border-stone-900 bg-zinc-700 hover:bg-zinc-800/50 w-full p-2 text-xs rounded-md font-bold"
          onClick={() => {
            setReady(true);
          }}
          disabled={ready}
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
