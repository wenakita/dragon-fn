import { useUserStats } from "../../hooks/useUserStats";
import useVoting from "../../hooks/useVoting";
import VotingOverviewBanner from "./VoteOverViewBanner";
function VoteMain() {
  const stats = useUserStats();
  const { state, setState } = useVoting();
  return (
    <div className="text-white p-5">
      <VotingOverviewBanner stats={stats} state={state} />
    </div>
  );
}

export default VoteMain;
