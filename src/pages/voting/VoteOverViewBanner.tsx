import React from "react";
import { useUserStats } from "../../hooks/useUserStats";
import VoteItem from "./VoteItem";
import VotingTopCard from "./VotingTopCard";
// all these will be in a sepoerate component
function VoteOverViewBanner({ stats }) {
  return (
    <div>
      <div className="grid grid-flow-col md:grid-cols-3 gap-3   rounded-lg w-90 m-auto">
        <VotingTopCard />
        {/* <div className="border xxs:hidden">hello</div>
      <div className="border">hello</div> */}
      </div>
      <div className="mt-10">
        <h3 className="text-[32px] font-semibold">Vote</h3>
        <h3 className="text-[13px] font-semibold mt-2 whitespace-nowrap">
          Vote on your favourite gauges to direct emissions!
        </h3>
      </div>
      <div className="mt-3 border  border-[#4C5C68] rounded-lg">
        <VoteItem />
        <VoteItem />
        <VoteItem />
      </div>
    </div>
  );
}

export default VoteOverViewBanner;
