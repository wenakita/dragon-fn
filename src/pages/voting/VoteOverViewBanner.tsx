import React from "react";
import { useUserStats } from "../../hooks/useUserStats";
import VoteItem from "./VoteItem";
// all these will be in a sepoerate component
function VoteOverViewBanner() {
  const stats = useUserStats();
  return (
    <div>
      <div className="grid grid-flow-col md:grid-cols-3 gap-3   rounded-lg w-90 m-auto">
        <div className="border w-full p-4 border-[#4C5C68] font-bold bg-[#2A2B30] rounded-lg">
          <h3 className="text-[10px] font-semibold">🗳️ Time Until</h3>
          <h3 className="text-[2.25rem]">4d8h</h3>
          <h3 className="text-[9px] font-semibold ">Voting Period Ends</h3>
        </div>
        {/* <div className="border xxs:hidden">hello</div>
      <div className="border">hello</div> */}
      </div>
      <div className="mt-10">
        <h3 className="text-[32px] font-semibold">Vote</h3>
        <h3 className="text-[13px] font-semibold mt-2 whitespace-nowrap">
          Vote on your favourite gauges to direct emissions!
        </h3>
      </div>
      <div className="mt-3 ">
        <VoteItem />
      </div>
    </div>
  );
}

export default VoteOverViewBanner;
