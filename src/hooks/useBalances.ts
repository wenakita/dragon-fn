import { useEffect, useState } from "react";
import { contracts } from "../../contract_interactions/contracts/contracts";
import {
  getDragonBalance,
  getlock,
  getLpTokenBalance,
  getPartner,
  getPartners,
  getVotingPower,
  userVotes,
} from "../../contract_interactions/contract-reads";
import { useWallets } from "@privy-io/react-auth";
import { unixToNumeric } from "../time-helper/time-helper";
import { setBalance } from "viem/actions";
import useVoting from "./useVoting";
import useAuthentication from "./useAuthentication";

function useBalances() {
  const { wallets } = useWallets();
  const isLoggedIn: any = useAuthentication();
  const { state } = useVoting();
  const [balances, setBalances] = useState<any | null>({});

  useEffect(() => {
    console.log(isLoggedIn);
    if (isLoggedIn) {
      findBalances();
    }
  }, [wallets, isLoggedIn]);

  useEffect(() => {}, []);

  async function findBalances() {
    try {
      if (!wallets || wallets.length === 0) return;
      const address = wallets[0]?.address;
      const dragon: any = await getDragonBalance(address);
      const lp: any = await getLpTokenBalance(address);
      const votingPower: any = await getVotingPower(address);
      const lockInfo: any = await getlock(address);
      const info = await getUserVoteInfo(state, wallets);
      const tempDate: any = lockInfo[1];
      lockInfo[1] = unixToNumeric(tempDate);
      //lock amount index zero is lock amount , index 1 is lock time shows full date
      setBalances({
        tokens: {
          dragon: { balance: dragon, logo: "/src/assets/dragon.png" },
          lp: {
            balance: lp,
            logo: "https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38.png",
          },
        },
        votingPower: {
          balance: votingPower,
        },
        votes: info,
        lockInfo,
      });
    } catch (error) {
      console.log(error);
    }
  }
  // async function getVotingPartners() {
  //   const currentVotingPartners: any = await getPartners();
  //   return currentVotingPartners
  // }

  async function getUserVoteInfo(state: any, wallets: any) {
    const { partners, period }: any = state;
    console.log(state);
    console.log(partners);
    if (partners && wallets[0]) {
      const votes = [];

      for (let i = 0; i < partners.length; i++) {
        const current: any = partners[i];
        console.log(current);
        const _partnerId = current[current.length - 2];
        const partner_info = await getPartner(_partnerId);

        const vote = await userVotes(period, wallets[0].address, _partnerId);
        const output: any = await findVotes(partner_info, vote);
        votes.push(output);
      }
      return votes;
    }
    return null;
  }

  async function findVotes(partnerInfo: any, vote: any) {
    console.log(partnerInfo);
    if (parseInt(vote) > 0) {
      return {
        votes: vote,
        address: partnerInfo[0],
        name: partnerInfo[1],
      };
    }
    return null;
  }

  return balances;
}

export default useBalances;
// use alert button more useful
