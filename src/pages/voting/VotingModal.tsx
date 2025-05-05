import { Badge, Box, Divider, Modal } from "@mui/material";
import React, { useState } from "react";
import useVoting from "../../hooks/useVoting";
import { dragonPools } from "../../../config/dragonPools";
import { MdOutlineArrowOutward } from "react-icons/md";
import VotingSlider from "./VotingSlider";
import TxToasterVoting from "./TxToasterVoting";

function VotingModal({
  setState,
  state,
  partner,
  votingPower,
  vote_amount,
}: any) {
  const { logo1, logo2, name } = dragonPools[0];
  const handleModalClose = () => {
    setState((prev: any) => ({
      ...prev,
      open: false,
    }));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#2A2B30",
    border: "2px solid #4C5C68",
    borderRadius: "10px",
    color: "#F4F4F5",
    boxShadow: 24,
    outline: "none",
    p: 3,
    width: "100%",
  };
  return (
    <>
      <Modal
        open={state.open}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div>
            <div className="flex justify-between">
              <span className="flex gap-2  w-full">
                <div className="relative size-9">
                  {/* Main image or content */}
                  <img
                    src={logo2}
                    alt={logo1}
                    className="w-full h-full rounded-full object-cover"
                  />

                  {/* Badge in bottom-right */}
                  <div className="absolute bottom-1 left-5 rig top-4.5 size-5 rounded-md border-2 border-[#4C5C68] bg-[#4C5C68] overflow-hidden">
                    <img
                      src={logo1}
                      alt="Badge"
                      className="w-full h-full object-cover bg-stone-500"
                    />
                  </div>
                </div>
                <span className="grid grid-flow-row">
                  <h3 className="mt-auto mb-auto font-extrabold">
                    {partner && partner[1]}
                  </h3>{" "}
                  <span className="flex">
                    <a
                      href="/"
                      className="mt-auto mb-auto font-bold hover:underline text-xs ms-1 text-[#e07d35]"
                    >
                      View Partner
                    </a>
                    <MdOutlineArrowOutward className="text-[#e07d35] text-xs mt-auto mb-auto" />
                  </span>
                </span>
              </span>
            </div>
            <div className="mt-3 flex gap-3">
              <span className="text-[#f88736] border border-[#FF6B00] bg-[#FF6B00]/20 font-bold text-xs px-2 rounded-2xl">
                🤝 Partner
              </span>{" "}
              {partner[partner.length - 3] > 0 && (
                <span className="text-[#f88736] border border-[#FF6B00] bg-[#FF6B00]/20 font-bold text-xs px-2 rounded-2xl">
                  🚀 {partner[partner.length - 3]}% boost
                </span>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold mt-5">Summary</h3>

              <div className="grid grid-flow-row mt-4 text-sm font-bold border rounded-md border-[#4C5C68] bg-[#2A2B30]  text-white/70">
                <span className="border-dashed  border-[#4C5C68]  flex justify-between p-2">
                  <h3>Fees Earned</h3>
                  <h3>{partner[partner.length - 4]}</h3>
                </span>
                <span className="border-t-1 border-dashed    border-[#4C5C68] flex justify-between p-2">
                  <h3>Total votes</h3>
                  <h3>{partner[partner.length - 1]}</h3>
                </span>

                <span className="border-t-1 border-dashed     border-[#4C5C68] flex justify-between p-2">
                  <h3>Your votes</h3>
                  <h3>{vote_amount}</h3>
                </span>
              </div>
            </div>
            {/* <div className="mt-2">
            <div className="grid grid-cols-2 w-50">
              <div className=" p-2 rounded-lg">hello</div>
              <div className=" p-2 rounded-lg">hello</div>
            </div>
          </div> */}
            <div className="mt-5">
              <VotingSlider
                partner={partner}
                state={state}
                setState={setState}
              />
            </div>
            <div className="mt-5">
              <button
                className="border rounded-md text-center w-full p-2 font-extrabold border-[#FF6B00] bg-[#FF6B00] hover:bg-[#FF6B00]/70"
                onClick={() => {
                  setState((prev: any) => ({
                    ...prev,
                    ready: true,
                    partnerSelection: partner[partner.length - 2],
                  }));
                }}
              >
                Vote
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      <TxToasterVoting state={state} setState={setState} />
    </>
  );
}

export default VotingModal;
