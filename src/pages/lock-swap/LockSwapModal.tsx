import React, { useEffect, useState } from "react";
import imgUrl from "../../assets/dragon.png";
import lockswapContent from "../../../config/LockSwapContent";
import { useUserStats } from "../../hooks/useUserStats";
import LPPairsModal from "./LPPairsModal";
import { useTokenLock } from "../../hooks/useTokenLock";
import LockSlider from "./LockSlider";
import TxToaster from "./TxToaster";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { dragonPools } from "../../../config/dragonPools";
import {
  IoIosInformationCircleOutline,
  IoMdInformationCircleOutline,
} from "react-icons/io";
import { Tooltip } from "@mui/material";
import { contracts } from "../../../contract_interactions/contracts/contracts";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaRegCalendar } from "react-icons/fa";
import CalenderModal from "./CalenderModal";
//{ title, description, logo, token_name }
function LockSwapModal({ type }: any) {
  const {
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
    txMessage,
    load,
    setLoad,
  }: any = useTokenLock(type);
  const { title, description, btn } = lockswapContent[type];
  const { lp_balance }: any = useUserStats();
  const [open, setOpen] = useState(false);
  const { logo1, logo2, name } = dragonPools[0];
  useEffect(() => {
    handleClose();
  }, [poolSelected]);

  const handleModalOpen = () => setPoolSelected(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="">
      <div className="text-white sm:w-[95%] md:w-[100%] p-5 ms-auto me-auto border border-[#2A2B30] bg-[#1E1F23] rounded-md">
        <h1 className="title text-2xl font-bold">
          {lockswapContent[type].title}{" "}
        </h1>
        {type !== "Extend" && (
          <div className="mt-2 p-3">
            <span className="text-xs flex justify-between mb-2 p-1">
              <h1>Amount</h1>
              <h1>Balance: {lp_balance}</h1>
            </span>
            <span className="grid grid-cols-2 border border-[#2A2B30] rounded-xl">
              <button
                onClick={() => {
                  handleModalOpen();
                  handleOpen();
                }}
                className=" p-1.5 border border-[#2A2B30] rounded-xl flex gap-2  border-r-0"
              >
                <div className="relative size-7">
                  <img
                    src={logo2}
                    className="w-full h-full rounded-full object-cover"
                  />

                  <div className="absolute bottom-1 left-[16px] rig top-[14px] size-[15.4px] rounded-xl border-2 border-[#4C5C68] bg-[#4C5C68] overflow-hidden">
                    <img
                      src={logo1}
                      alt="Badge"
                      className="w-full h-full object-cover bg-stone-500"
                    />
                  </div>
                </div>
                <h3 className="mt-2 text-sm font-bold">Dragon LP</h3>
              </button>
              <span className="border border-[#28292e] p-1.5 grid grid-flow-row text-xs">
                <input
                  type="tex"
                  placeholder="0"
                  className=" h-full outline-0"
                  onChange={(e) => {
                    setTokenAmount(e.target.value);
                  }}
                />
                <h3>$0</h3>
              </span>
            </span>
            <span>
              <a
                href={`https://www.shadow.so/liquidity/manage/${contracts.lpToken}/712094`}
                target="_blank"
                className="text-white/60 text-sm flex gap-2 p-2 underline  w-30"
              >
                <h3>View Pool</h3>
                <HiOutlineExternalLink className="mt-0.5" />
              </a>
            </span>
          </div>
        )}
        {type == "Lock" || type == "Extend" ? (
          <div className="p-5">
            <h3>Lock Time</h3>
            <div className="grid grid-cols-4 gap-3 mt-3">
              <button
                className="border border-[#2A2B30] rounded-full"
                onClick={() => {
                  console.log("7");
                  setLockTime(7);
                }}
              >
                1W
              </button>
              <button
                className="border border-[#2A2B30] rounded-full"
                onClick={() => {
                  console.log("7");
                  setLockTime(14);
                }}
              >
                2W
              </button>{" "}
              <button
                className="border border-[#2A2B30] rounded-full"
                onClick={() => {
                  console.log("7");
                  setLockTime(21);
                }}
              >
                3W
              </button>{" "}
              <button
                className="border border-[#2A2B30] rounded-full"
                onClick={() => {
                  console.log("30");
                  setLockTime(30);
                }}
              >
                1M
              </button>
              <button
                className="border border-[#2A2B30] rounded-full"
                onClick={() => {
                  console.log("90");
                  setLockTime(90);
                }}
              >
                3M
              </button>
              <button
                className="border border-[#2A2B30] rounded-full"
                onClick={() => {
                  console.log("365");
                  setLockTime(365);
                }}
              >
                1Y
              </button>
              <CalenderModal />
            </div>
            <div className="p-2 grid grid-flow-row  gap-2 mt-2">
              <div className=" flex justify-between text-xs">
                <h3>Tokens locked:</h3>
                <h3>{tokenAmount}</h3>
              </div>
              <div className=" flex justify-between text-xs ">
                <h3>Voting power:</h3>
                <h3>{votingPower || "-"}</h3>
              </div>
            </div>
          </div>
        ) : null}

        <TxToaster
          txReady={txComplete}
          setTxReady={setTxComplete}
          txMessage={txMessage}
          load={load}
          setLoad={setLoad}
        />
        <span>
          <LPPairsModal
            open={open}
            setOpen={setOpen}
            handleOpen={handleOpen}
            handleClose={handleClose}
            setPoolSelected={setPoolSelected}
          />
        </span>
        <div className="p-3  flex justify-center text-center gap-2 text-white">
          <button
            className="border cursor-pointer w-full p-3 rounded-md bg-[#E65C00] border-[#383941] font-extrabold mt-2 hover:bg-[#FF6B00]/90"
            onClick={() => {
              handleTXEvent();
            }}
          >
            <span className="text-[16px] font-semibold">
              {load ? (
                <>
                  <AiOutlineLoading3Quarters className="m-auto animate-spin" />
                </>
              ) : (
                btn
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default LockSwapModal;
