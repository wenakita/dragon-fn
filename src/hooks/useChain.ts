import { useEffect, useState } from "react";
import { client } from "../../config/viem_config.ts";
import { createWalletClient, custom } from "viem";
import { sonic } from "viem/chains";
import { useWallets } from "@privy-io/react-auth";

export function useChain() {
  const { wallets } = useWallets();
  const [chain, setChain] = useState(146);
  console.log(sonic.id);
  useEffect(() => {
    getChain();
  }, []);

  useEffect(() => {
    if (wallets[0]) {
      switchChain();
    }
    console.log(chain);
  }, [chain]);

  async function getChain() {
    const chainId: any = await client.getChainId();
    setChain(chainId);
  }

  async function switchChain() {
    if (wallets[0]) {
      const provider: any = await wallets[0].getEthereumProvider();
      const walletCLient: any = await initializeWalletClient(
        provider,
        wallets[0]
      );
      await walletCLient.switchChain({ id: chain });
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
  return { chain, setChain };
}
