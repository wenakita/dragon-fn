import { createWalletClient, custom } from "viem";
import { sonic } from "viem/chains";

export async function switchChain(provider: any, account: any, _chainId: any) {
  const walletCLient: any = await initializeWalletClient(provider, account);
  await walletCLient.switchChain({ chainId: _chainId });
}

async function initializeWalletClient(provider: any, account: any) {
  const walletClient = await createWalletClient({
    account,
    chain: sonic,
    transport: custom(provider),
  });
  return walletClient;
}
