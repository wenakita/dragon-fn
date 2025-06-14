import React from "react";
// import LockList from "./LockList"; // Component not found
import { CiLock } from "react-icons/ci";
import { FiCheck } from "react-icons/fi";
import { FaLock } from "react-icons/fa";

function LockSwapInstructions({
  setReady,
  ready,
  setApprove,
  wasApproved,
}: any) {
  return (
    <div className="">
      <h3 className="mb-5 font-semibold p-3">Locking LP Tokens</h3>
      <span className="">
        {/* <LockList /> */}
      </span>
      <span className="flex gap-2">
        <button
          className={
            wasApproved
              ? "border border-stone-900 bg-zinc-900  w-full p-2 text-xs rounded-md font-bold"
              : "border border-stone-900 bg-zinc-800 hover:bg-zinc-800/50 w-full p-2 text-xs rounded-md font-bold"
          }
          disabled={wasApproved}
          onClick={() => {
            setApprove(true);
          }}
        >
          <span className="flex justify-center gap-1">
            <FiCheck className="mt-0.5 font-bold" />
            <h2>{wasApproved ? "Approved" : "Verify Approval"}</h2>
          </span>
        </button>
        <button
          className="border border-stone-900 bg-zinc-800 hover:bg-zinc-800/50 w-full p-2 text-xs rounded-md font-bold"
          onClick={() => {
            setReady(true);
          }}
          disabled={!wasApproved}
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
