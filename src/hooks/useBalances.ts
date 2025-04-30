import { useEffect, useState } from "react";
import { contracts } from "../../contract_interactions/contracts/contracts";
import {
  getDragonBalance,
  getlock,
  getLpTokenBalance,
  getVotingPower,
} from "../../contract_interactions/contract-reads";
import { useWallets } from "@privy-io/react-auth";
import { unixToNumeric } from "../time-helper/time-helper";
import { setBalance } from "viem/actions";

function useBalances() {
  const { wallets } = useWallets();
  const [balances, setBalances] = useState<any | null>({});

  useEffect(() => {
    if (wallets[0]) {
      findBalances();
    }
  }, []);

  async function findBalances() {
    const { address }: any = wallets[0];
    console.log(address);
    const dragon: any = await getDragonBalance(address);
    const lp: any = await getLpTokenBalance(address);
    const votingPower: any = await getVotingPower(address);
    const lockInfo: any = await getlock(address);
    const tempDate: any = lockInfo[1];
    lockInfo[1] = unixToNumeric(tempDate);
    console.log(`Lock Info: ${lockInfo}`);
    //lock amount index zero is lock amount , index 1 is lock time shows full date
    setBalances({ dragon, lp, votingPower, lockInfo });
  }

  return balances;
}

export default useBalances;
