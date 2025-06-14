import { PrivyProvider, useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import {
  currentPeriod,
  getPartners,
  getVotingPower,
} from "../../contract_interactions/contract-reads";
import { vote } from "../../contract_interactions/contract-writes";

function useVoting() {
  const [amount, setAmount] = useState(0);
  const { wallets } = useWallets();
  const [state, setState] = useState({
    open: false,
    ready: false,
    poolSelected: null,
    partners: null,
    votePercent: null,
    amount: 0,
    partnerSelection: null,
    txComplete: false,
    txMessage: null,
  });
  // useEffect(() => {
  //
  // });

  //voting write function works now the problem was u had to add lp u dont get tokens for making the pool

  useEffect(() => {
    getVotingPartners();
    getPeriod();
  }, []);

  useEffect(() => {
    if (state.ready && state.partnerSelection !== null) {
      initiateVote();
    }
  }, [state.ready]);

  useEffect(() => {}, [state.amount]);

  function setVotePercent() {}

  function setPartners(refreshed_partners: any) {
    setState((prevState) => ({
      ...prevState,
      partners: refreshed_partners,
    }));
  }

  function setPeriod(period: any) {
    setState((prevState) => ({
      ...prevState,
      period: period,
    }));
  }

  //this function is very important the period value is mostly a paramerter in all functions
  async function getVotingPartners() {
    const currentVotingPartners: any = await getPartners();
    setPartners(currentVotingPartners);
  }

  async function getPeriod() {
    const period: any = await currentPeriod();
    setPeriod(period);
  }

  //accounts is the array of wallets we can just use wallets from useWallets()

  async function initiateVote() {
    const provider: any = await wallets[0]?.getEthereumProvider();
    const account: any = await provider.request({
      method: "eth_requestAccounts",
    });
    const response = await vote(state.partnerSelection, provider, account[0]);
    setTxMessage(response);

    setReady(false);
  }

  function setReady(newValue: any) {
    setState((prev) => ({
      ...prev,
      ready: newValue,
      partnerSelection: null,
    }));
  }

  function setTxMessage(newValue: any) {
    setState((prev) => ({
      ...prev,
      txComplete: true,
      txMessage: newValue,
    }));
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
