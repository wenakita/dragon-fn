import { useWallets } from "@privy-io/react-auth";
import { useEffect } from "react";
import { getVotingPower } from "../../contract_interactions/contract-reads";

export function useUserStats() {
  const { wallets } = useWallets();

  useEffect(() => {
    if (wallets[0]) {
      getStats(wallets[0].address);
    }
  }, [wallets]);
  return "s";
}

async function getStats(address: string) {
  const votingPower = await getVotingPower(address);
  console.log(`Total Voting Power: ${votingPower}`);
}
