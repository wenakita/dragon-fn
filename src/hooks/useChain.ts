import { useEffect, useState } from "react";
import { client } from "../../config/viem_config.ts";
import { createWalletClient, custom } from "viem";
import { arbitrum, base, sonic } from "viem/chains";
import { useWallets } from "@privy-io/react-auth";
import { NetworkArbitrumOne } from "@web3icons/react";
export function useChain() {
  const { wallets } = useWallets();
  const [chain, setChain] = useState(146);
  const [chainLogo, setChainLogo] = useState("sonic");
  useEffect(() => {
    getChain();
  }, []);

  useEffect(() => {
    if (wallets[0]) {
      switchChain();
    }
  }, [chain]);

  async function getChain() {
    const chainId: any = await client.getChainId();
    setChain(chainId);
  }

  function setLogo(chainId: any) {
    switch (chainId) {
      case base.id:
        setChainLogo("base");
        break;
      case sonic.id:
        setChainLogo("sonic");
        break;
      case arbitrum.id:
        setChainLogo("arbitrum");
        break;
    }
  }

  async function switchChain() {
    if (wallets[0]) {
      setLogo(chain);

      const provider: any = await wallets[0].getEthereumProvider();
      const walletCLient: any = await initializeWalletClient(
        provider,
        wallets[0]
      );
      await walletCLient.switchChain({ id: chain });
      setChain(chain);
    }
  }

  async function initializeWalletClient(provider: any, account: any) {
    const walletClient: any = await createWalletClient({
      account,
      chain: sonic,
      transport: custom(provider),
    });
    return walletClient;
  }
  return { chain, setChain, chainLogo };
}
