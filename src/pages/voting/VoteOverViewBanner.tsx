import React from "react";
import { useUserStats } from "../../hooks/useUserStats";
import VoteItem from "./VoteItem";
import VotingTopCard from "./VotingTopCard";
// all these will be in a sepoerate component
function VoteOverViewBanner({ stats, state }: any) {
  const { partners } = state;
  const { votingPower, vote_amount }: any = useUserStats();
  console.log(partners);
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
          Vote for a partner to receive probability boost!
        </h3>
      </div>
      <div className="mt-3 border  border-[#4C5C68] rounded-lg">
        {partners
          ? partners.map((partner: any) => {
              return (
                <VoteItem
                  partner={partner}
                  votingPower={votingPower}
                  vote_amount={vote_amount}
                />
              );
            })
          : null}
      </div>
    </div>
  );
}

export default VoteOverViewBanner;
