import { useUserStats } from "../../hooks/useUserStats";
import VotingOverviewBanner from "./VoteOverViewBanner";
function VoteMain() {
  const stats = useUserStats();
  return (
    <div className="text-white p-5">
      <VotingOverviewBanner stats={stats} />
    </div>
  );
}

export default VoteMain;
