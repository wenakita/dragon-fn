import { createPublicClient, createWalletClient, http, custom } from "viem";
import { mainnet, sonic } from "viem/chains";
import { PrivyProvider } from "@privy-io/react-auth";
// const provider = await window.privy.getEthereumProvider();

export const client = createPublicClient({
  chain: sonic,
  transport: http(),
});

export const walletClient = createWalletClient({
  chain: sonic,
  transport: http(),
});
