import { useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  currentPeriod,
  getPartners,
  getVotingPower,
} from "../../contract_interactions/contract-reads";

function useVoting() {
  const { wallets } = useWallets();
  const [state, setState] = useState({
    open: false,
    ready: false,
    poolSelected: null,
    partners: null,
    votePercent: null,
  });
  console.log(state);
  useEffect(() => {
    getVotingPartners();
  });
  async function vote() {
    return null;
  }

  function setVotePercent(){
    
  }

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

  async function getProvider() {
    const provider = await wallets[0]?.getEthereumProvider();
    const account = await provider.request({ method: "eth_requestAccounts" });
    return { provider, account };
  }

  return { setState, state };
}

export default useVoting;

// setState(prev => ({
//     ...prev,
//     lockTime: 1234,
//   }));
