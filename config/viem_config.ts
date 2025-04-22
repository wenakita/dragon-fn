import { createPublicClient, createWalletClient, http, custom } from "viem";
import { mainnet, sonic } from "viem/chains";
import { PrivyProvider } from "@privy-io/react-auth";
// const provider = await window.privy.getEthereumProvider();
import { useWallets } from "@privy-io/react-auth";

export const client = createPublicClient({
  chain: sonic,
  transport: http(),
});

// const { wallets } = useWallets();
// const wallet = wallets[0];

// export const walletClient: any = createWalletClient({
//   account: wallet ? (wallet.address as `0x${string}`) : undefined,
//   chain: sonic,
//   transport: wallet ? wallet.getEthereumProvider() : window.ethereum,
// });
