import { writeContract } from "viem/actions";
import { client, walletClient } from "../config/viem_config";
import { createWalletClient } from "viem";
import { sonic } from "viem/chains";
import { LPTokenABI } from "../config/LPTokenABI";
import clc from "cli-color";

async function createVeLock(value: number) {
  //   const {request: request_response} = await client.simulateContract({
  //   })
}

async function purchaseDragon(amount: number) {}

async function sellDragon(amount: number) {}

async function approveSending(
  spender: string,
  amount: number,
  approver_address: any,
  abi: any
) {
  const { result } = await client.simulateContract({
    address: approver_address,
    abi,
    functionName: "approve",
    args: [spender, amount],
  });

  if (result) {
    console.log(clc.green(`Simulation sucessful`));
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
async function initializeWalletClient(address: string, transport) {
  const walletClient = createWalletClient({
    account: address as `0x${string}`,
    chain: sonic,
    transport,
  });
}
