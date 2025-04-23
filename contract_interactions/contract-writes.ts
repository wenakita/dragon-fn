import { client } from "../config/viem_config.ts";
import { createWalletClient, custom } from "viem";
import { sonic } from "viem/chains";
import { ve69_ABI } from "../config/ve69-ABI";
import { contracts } from "./contracts/contracts.ts";
const MAX_ALLOWANCE = 1000000;

export async function createVeLock(
  value: number,
  time: number,
  provider: any,
  account: any
) {
  try {
    const walletClient = await initializeWalletClient(provider, account);
    console.log(contracts.ve69LP);
    const { request }: any = await client.simulateContract({
      account,
      address: contracts.ve69LP,
      abi: ve69_ABI,
      functionName: "createLock",
      args: [value, time],
    });

    await walletClient.writeContract(request);

    return { complete: true, message: "Tokens successfully locked!" };
  } catch (error) {
    console.log(error);
    return { complete: false, message: "No Funds!" };
  }
}

export async function purchaseDragon(amount: number) {}

async function sellDragon(amount: number) {}

//the provider is what we use to use viem with privy
//ex: const provider = await embeddedWallet.getEthereumProvider();

export async function approveSending(
  approver_address: any,
  spender: any,
  approver_abi: any,
  provider: any,
  account: any
) {
  try {
    const walletClient = await initializeWalletClient(provider, account);
    const { request }: any = await client.simulateContract({
      account,
      address: approver_address,
      abi: approver_abi,
      functionName: "approve",
      args: [spender, MAX_ALLOWANCE],
    });

    await walletClient.writeContract(request);

    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// approveSending(
//   "0x69fA10882A252A79eE57E2a246D552BA630fd955",
//   100000,
//   "0xfbd43F75e09bfBcDeF8B95CEfAbf980311E6d62F",
//   LPTokenABISimulation
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
