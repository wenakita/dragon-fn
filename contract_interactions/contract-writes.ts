import { client } from "../config/viem_config.ts";
import { createWalletClient, custom } from "viem";
import { sonic } from "viem/chains";
import { ve69_ABI } from "../config/ve69-ABI";
const MAX_ALLOWANCE = 100000000;

export async function createVeLock(value: number, time: number) {
  const { result }: any = await client.simulateContract({
    address: "0x69fA10882A252A79eE57E2a246D552BA630fd955",
    abi: ve69_ABI,
    functionName: "createLock",
    args: [value, time],
    account: "0xa24e1426Bc37d0D1a9e7037f5De3322E800F2D7d",
  });

  console.log(result);

  return null;
}

export async function purchaseDragon(amount: number) {}

async function sellDragon(amount: number) {}

//the provider is what we use to use viem with privy
//ex: const provider = await embeddedWallet.getEthereumProvider();

export async function approveSending(
  approver_address: any,
  args: any,
  abi: any,
  provider: any,
  account: any
) {
  try {
    const walletClient = await initializeWalletClient(provider, account);
    const { request }: any = await client.simulateContract({
      address: approver_address,
      abi,
      functionName: "allowance",
      args,
    });

    await walletClient.writeContract(request);

    if (request) {
      console.log(`Approval sucessful`);
    }
    return null;
  } catch (error) {
    console.log(error);
  }
}

// approveSending(
//   "0x69fA10882A252A79eE57E2a246D552BA630fd955",
//   100000,
//   "0xfbd43F75e09bfBcDeF8B95CEfAbf980311E6d62F",
//   LPTokenABI
// );

async function simulateWrite(parameters: any) {
  // const {request: request_response} = await client.simulateContract({
  // })
}

//another way we can use walletClient
async function initializeWalletClient(provider: any, account: any) {
  const walletClient = createWalletClient({
    account,
    chain: sonic,
    transport: custom(provider),
  });
  return walletClient;
}
