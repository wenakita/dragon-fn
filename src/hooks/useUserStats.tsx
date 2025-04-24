import { useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  getVotingPower,
  locked,
} from "../../contract_interactions/contract-reads";

export function useUserStats() {
  const { wallets } = useWallets();
  const [userStats, setStats] = useState<object | null>({});

  useEffect(() => {
    async function getStats(address: string) {
      const user_stats: object = await stats(address);
      setStats(user_stats);
      return user_stats;
    }
    if (wallets[0]) {
      getStats(wallets[0].address);
    }
  }, [wallets]);
  return userStats;
}

async function stats(address: string) {
  const votingPower = await getVotingPower(address);
  const lock_info: any = await locked(address);
  console.log({ votingPower, tokens_locked: lock_info[0] || null });
  return { votingPower, tokens_locked: lock_info[0] || null };
}
