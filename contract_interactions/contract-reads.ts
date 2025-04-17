import { readContract } from "viem/actions";
import { client } from "../config/viem_config";
import { lotto_abi } from "../config/lotto_abi";
const main_lotto_ca = "0x4Ad7107F4C638c01ad4eAD39d035626F05727e41";
const jackpot_manager_ca = "";

export async function get_game_config() {
  const data: any = await client.readContract({
    address: main_lotto_ca,
    abi: lotto_abi,
    functionName: "gameConfig",
  });
  console.log(data);

  return {
    minEntryAmount: Number(BigInt(data[0])) / 1e18,
    maxEntryAmount: Number(BigInt(data[1])) / 1e18,
    baseChance: Number(data[2]),
    maxChance: Number(data[3]),
    tokensPerPercent: Number(BigInt(data[4])) / 1e18,
    minJackpotPercent: Number(data[5]),
    maxJackpotPercent: Number(data[6]),
    minJackpotThreshold: Number(BigInt(data[7])) / 1e18,
    useUDistribuitom: Boolean(data[8]),
    active: Boolean(data[9]),

    // #more parameters go here look at https://sonicscan.org/address/0x4ad7107f4c638c01ad4ead39d035626f05727e41#readContract
  };
}
////

function verifyBalance(
  token_address: string,
  wallet_address: string,
  amount_to_use: number
) {}
///

// Calculate voting power based on amount and lock time:

export async function calculateVotingPower(
  amount: BigInteger,
  UnlockTime: BigInteger
) {
  return null;
}

// https://github.com/wenakita/srd/blob/main/client%2Fsrc%2Fcomponents%2FProbabilityGameEntry.tsx
