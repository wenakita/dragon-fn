import { useWallets } from "@privy-io/react-auth";
import { useEffect, useState } from "react";
import { getVotingPower } from "../../contract_interactions/contract-reads";

function useVoting() {
  const { wallets } = useWallets();
  const [state, setState] = useState({
    open: false,
    ready: false,
    poolSelected: null,
  });
  console.log(state);

  async function vote() {
    return null;
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
