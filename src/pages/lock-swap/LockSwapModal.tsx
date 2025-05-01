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
    <div className="text-white w-[93%] p-3 m-auto border-0 border-[#FF6B00] bg-[#2A2B30] rounded-md">
      <h1 className="title text-2xl font-bold">
        {lockswapContent[type].title}{" "}
      </h1>
      <h1 className="description text-[9px] font-bold mt-2">{description}</h1>
      {type !== "extend" && (
        <div className="mt-4 border border-[#4C5C68] bg-[#2A2B30] rounded-lg p-3">
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
                  className="flex justify-center border  text-sm p-0.5 rounded-md gap-3 bg-[#383941] border-[#4C5C68] p-1"
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
      {type == "lock" || type == "extend" ? (
        <>
          <div className="p-4 flex justify-center h-14">
            <LockSlider lockTime={lockTime} setLockTime={setLockTime} />
          </div>
          <div className="grid grid-cols-2 border border-[#38383f] rounded-lg w-90 m-auto">
            <div className="border-r-1 border-[#38383f] ">
              <h3 className="text-center">Lock Time:</h3>
              <span className="flex justify-center gap-2">
                <h3 className="text-center text-[30px]">{lockTime}</h3>
                <h3 className="text-center text-[10px]  mt-auto mb-2.5">
                  days
                </h3>
              </span>
            </div>
            <div>
              <h3 className="text-center">Voting Power:</h3>
              <h3 className="text-center text-[30px]">{votingPower}</h3>
            </div>
          </div>
        </>
      ) : null}
      <div className="p-3  flex justify-center text-center gap-2">
        <button
          className="border w-full p-2 rounded-md bg-[#FF6B00] border-[#383941] font-extrabold mt-2 hover:bg-[#FF6B00]/70"
          onClick={() => {
            handleTXEvent();
          }}
        >
          <span className="">
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
  );
}

export default LockSwapModal;
