import { PrivyProvider, useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  currentPeriod,
  getPartners,
  getVotingPower,
} from "../../contract_interactions/contract-reads";
import { vote } from "../../contract_interactions/contract-writes";

function useVoting() {
  const { wallets } = useWallets();
  const [state, setState] = useState({
    open: false,
    ready: false,
    poolSelected: null,
    partners: null,
    votePercent: null,
    ready: null,
  });
  console.log(state);
  // useEffect(() => {
  //
  // });

  //voting write function works now the problem was u had to add lp u dont get tokens for making the pool

  useEffect(() => {
    getVotingPartners();
  }, []);

  function setVotePercent() {}

  function setPartners(refreshed_partners: any) {
    console.log(refreshed_partners);
    setState((prevState) => ({
      ...prevState,
      partners: refreshed_partners,
    }));
  }

  //this function is very important the period value is mostly a paramerter in all functions
  async function getVotingPartners() {
    const currentVotingPartners: any = await getPartners();
    setPartners(currentVotingPartners);
  }

  //accounts is the array of wallets we can just use wallets from useWallets()

  async function initiateVote() {
    const provider: any = await wallets[0]?.getEthereumProvider();
    // const account: any = await provider.request({
    //   method: "eth_requestAccounts",
    // });
    const account = wallets;
    await vote("1", provider, account);
  }

  async function getProvider() {
    const provider = await wallets[0]?.getEthereumProvider();
    return { provider };
  }

  return { setState, state };
}

export default useVoting;

// setState(prev => ({
//     ...prev,
//     lockTime: 1234,
//   }));
