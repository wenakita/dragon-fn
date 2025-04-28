import React from "react";
import { dragonPools } from "../../../config/dragonPools";
import { FaExpandAlt } from "react-icons/fa";
import useVoting from "../../hooks/useVoting";
import VotingModal from "./VotingModal";
function VoteItem() {
  const { logo1, logo2, name } = dragonPools[0];
  const { setState, state } = useVoting();
  const handleModalOpen = () => {
    setState((prev) => ({
      ...prev,
      open: true,
    }));
  };
  return (
    <>
      <div className="p-3 border  border-[#383941]  rounded-lg">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="relative size-9">
              {/* Main image or content */}
              <img
                src={logo1}
                alt={logo1}
                className="w-full h-full rounded-lg object-cover"
              />

              {/* Badge in bottom-right */}
              <div className="absolute bottom-1 left-5 rig top-4.5 size-5 rounded-md border-2 border-[#4C5C68] bg-[#4C5C68] overflow-hidden">
                <img
                  src={logo2}
                  alt="Badge"
                  className="w-full h-full object-cover bg-stone-500"
                />
              </div>
            </div>
            <div>{name}</div>
          </div>
          <div>
            <button
              type="button"
              className="mt-auto mb-auto border rounded-md   bg-[#FF6B00] hover:bg-[#FF6B00]/70 border-[#383941]  p-2"
              onClick={() => {
                handleModalOpen();
              }}
            >
              <FaExpandAlt />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-3 mt-3 text-[10px]">
          <span className="">
            <h3>Total Votes</h3>
            <h3 className="text-[16px]">20</h3>
          </span>
          <span className="">
            <h3>Your Votes</h3>
            <h3 className="text-[16px]">100k</h3>
          </span>
          <span></span>
        </div>
        <VotingModal setState={setState} state={state} />
      </div>
    </>
  );
}

export default VoteItem;
