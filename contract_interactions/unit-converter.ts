import { ethers } from "ethers";

const provider = ethers.getDefaultProvider();

function convertToUnit256(value: number) {
  return null;
}

//lock time should be in days
async function formatLockTime(lockTime: number) {
  const currentTime: any = await provider.getBlock("latest");

  return currentTime.timestamp + lockTime * 86400;
}

console.log(formatLockTime(3));
