import { client } from "../config/viem_config.ts";
import { createWalletClient } from "viem";
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

export async function approveSending(
  spender: string,
  approver_address: any,
  abi: any
) {
  const { result } = await client.simulateContract({
    address: approver_address,
    abi,
    functionName: "approve",
    args: [spender, MAX_ALLOWANCE],
  });

  if (result) {
    console.log(`Simulation sucessful`);
  }
  return null;
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
async function initializeWalletClient(address: string, transport: any) {
  const walletClient = createWalletClient({
    account: address as `0x${string}`,
    chain: sonic,
    transport,
  });
}
