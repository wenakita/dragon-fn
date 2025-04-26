import { useEffect, useState } from "react";
import { useWallets } from "@privy-io/react-auth"; // adjust if different

import { numericToUnix } from "../time-helper/time-helper";
import { calculateVotingPower } from "../../contract_interactions/contract-reads";
import {
  createVeLock,
  extendLockTime,
  increaseLockAmount,
} from "../../contract_interactions/contract-writes.ts";
import { verifyApproval } from "../../contract_interactions/contract-reads";
import { approveSending } from "../../contract_interactions/contract-writes.ts";
import { contracts } from "../../contract_interactions/contracts/contracts";
import { LPTokenABI } from "../../config/LPTokenABI";

export function useTokenLock(type: string) {
  const { wallets } = useWallets();
  const [lockTime, setLockTime] = useState(0);
  const [tokenAmount, setTokenAmount] = useState(0);
  const [votingPower, setVotingPower] = useState();
  const [isReady, setReady] = useState(false);
  const [approve, setApprove] = useState(true);
  const [wasApproved, setWasApproved] = useState(false);
  const [txComplete, setTxComplete] = useState({
    completed: false,
    message: null,
  });
  const [poolSelected, setPoolSelected] = useState(null);

  useEffect(() => {
    if (approve) {
      approveTokens();
    }
  }, [approve]);

  // useEffect(() => {
  //   if (isReady && tokenAmount > 0 && lockTime > 0) {
  //     lockLP();
  //   }
  // }, [isReady, lockTime, isReady]);
  useEffect(() => {
    handleTXEvent();
  }, [isReady]);

  useEffect(() => {
    console.log(`Voting: ${lockTime}`);
    if (lockTime > 0 || tokenAmount > 0) {
      if (type == "lock") {
        getVotingPower();
      }
    }
  }, [lockTime]);

  function handleTXEvent() {
    console.log(type);
    switch (type) {
      case "lock":
        lockLP();
        break;

      case "increase":
        increaseLock();
        break;
      case "extend":
        extendTime();
        break;
    }
  }

  async function lockLP() {
    const unix_time = numericToUnix(lockTime);
    const provider = await wallets[0]?.getEthereumProvider();
    const account = await provider.request({ method: "eth_requestAccounts" });
    const lock_status: any = await createVeLock(
      tokenAmount,
      unix_time,
      provider,
      account[0]
    );
    console.log(`Status: ${lock_status.error}`);
    setTxComplete(lock_status);
  }

  async function approveTokens() {
    const provider = await wallets[0]?.getEthereumProvider();
    const account = await provider.request({ method: "eth_requestAccounts" });

    const isApproved = await verifyApproval(
      wallets[0].address,
      contracts.ve69LP
    );
    setWasApproved(isApproved);

    if (!isApproved) {
      const approval_request = await approveSending(
        contracts.lpToken,
        contracts.ve69LP,
        LPTokenABI,
        provider,
        account[0]
      );
      setWasApproved(approval_request);
    }
  }

  async function increaseLock() {
    const { provider, account }: any = await getProvider();
    const increase_result: any = await increaseLockAmount(
      tokenAmount,
      provider,
      account[0] || null
    );
  }

  async function getProvider() {
    const provider = await wallets[0]?.getEthereumProvider();
    const account = await provider.request({ method: "eth_requestAccounts" });
    return { provider, account };
  }

  async function extendTime() {
    const { provider, account }: any = await getProvider();
    const unlock_time = numericToUnix(lockTime);
    const extendResult = await extendLockTime(
      unlock_time,
      provider,
      account[0]
    );
  }

  async function getVotingPower() {
    const unix_time = numericToUnix(lockTime);
    const power = await calculateVotingPower(tokenAmount, unix_time);
    setVotingPower(power);
  }

  return {
    lockTime,
    setLockTime,
    tokenAmount,
    setTokenAmount,
    votingPower,
    isReady,
    setReady,
    approve,
    setApprove,
    wasApproved,
    txComplete,
    setTxComplete,
    poolSelected,
    setPoolSelected,
    handleTXEvent,
  };
}
