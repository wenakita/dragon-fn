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
      <div className="text-white sm:w-[95%] md:w-[100%] p-5 m-auto border border-[#2A2B30] bg-[#1E1F23] rounded-md">
        <h1 className="title text-2xl font-bold">
          {lockswapContent[type].title}{" "}
        </h1>
        {type !== "extend" && (
          <div className="mt-4 border border-[#2A2B30] bg-[#232429]/60 rounded-lg p-3">
            <h3 className="text-xs font-bold" style={{ color: "#B0B3BA" }}>
              From
            </h3>
            <div className="grid grid-cols-8 mt-2 ">
              <span className=" col-span-3">
                <input
                  type="tex"
                  placeholder="0"
                  className="text-xl h-full outline-0"
                  onChange={(e) => {
                    setTokenAmount(e.target.value);
                  }}
                />
              </span>
              <span className="col-span-5 ms-auto  ">
                <span className="flex justify-end">
                  <button
                    onClick={() => {
                      handleModalOpen();
                      handleOpen();
                    }}
                    className="flex justify-center border  text-sm p-0.5 rounded-md gap-3 bg-[#24252a] border-[#34353b] p-1"
                  >
                    <div className="relative size-5.5">
                      <img
                        src={logo2}
                        className="w-full h-full rounded-full object-cover"
                      />

                      <div className="absolute bottom-1 left-[12px] rig top-2.5 size-3.5 rounded-md border-2 border-[#4C5C68] bg-[#4C5C68] overflow-hidden">
                        <img
                          src={logo1}
                          alt="Badge"
                          className="w-full h-full object-cover bg-stone-500"
                        />
                      </div>
                    </div>
                    <h3 className="mt-1 font-extrabold text-sm me-2">
                      {poolSelected ? poolSelected.symbol : "DRAGON"}
                    </h3>
                  </button>
                </span>
                <h3 className="mt-1 font-bold text-[9px] flex  justify-end">
                  Balance:{lp_balance}
                </h3>
              </span>
            </div>
          </div>
        )}
        {type == "Lock" || type == "Extend" ? (
          <>
            <div className="p-8 flex justify-center h-14">
              <LockSlider lockTime={lockTime} setLockTime={setLockTime} />
            </div>
            <div className="grid grid-flow-row text-xs font-bold text-white/50 p-5">
              <span className="flex justify-between p-2">
                <span className="flex gap-1">
                  <h3>Total LP locked:</h3>

                  <Tooltip title="Amount of LP tokens being locked ">
                    <IoMdInformationCircleOutline className="text-lg " />
                  </Tooltip>
                </span>
                <span className="text-white flex gap-1">
                  <h3 className="mt-0.5">{tokenAmount}</h3>
                </span>
              </span>
              <span className="flex justify-between p-2">
                <span className="flex gap-1">
                  <h3>Locking until:</h3>

                  <Tooltip title="Time until tokens are locked ">
                    <IoMdInformationCircleOutline className="text-lg " />
                  </Tooltip>
                </span>
                <span className="text-white">
                  <h3>{lockTime}</h3>
                </span>
              </span>{" "}
              <span className="flex justify-between p-2">
                <span className="flex gap-1">
                  <h3>Power recieved:</h3>
                  <Tooltip title="Voting power you recieve to vote on partners ">
                    <IoMdInformationCircleOutline className="text-lg " />
                  </Tooltip>
                </span>
                <span className="text-white">
                  <h3>{votingPower}</h3>
                </span>
              </span>
            </div>
          </>
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
      </div>
      <div className="p-3  flex justify-center text-center gap-2 text-white">
        <button
          className="border w-full p-3 rounded-md bg-[#E65C00] border-[#383941] font-extrabold mt-2 hover:bg-[#FF6B00]/90"
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
  );
}

export default LockSwapModal;
