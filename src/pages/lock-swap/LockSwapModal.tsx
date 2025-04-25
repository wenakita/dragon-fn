import React, { useEffect, useState } from "react";
import imgUrl from "../../assets/dragon.png";
import lockswapContent from "../../../config/LockSwapContent";
import { useUserStats } from "../../hooks/useUserStats";
import LPPairsModal from "./LPPairsModal";
//{ title, description, logo, token_name }
function LockSwapModal({ type }: any) {
  console.log(lockswapContent[type]);
  const { title, description, btn } = lockswapContent[type];
  const { lp_balance }: any = useUserStats();
  const [open, setOpen] = useState(false);
  const [poolSelected, setPoolSelected] = useState(null);

  useEffect(() => {
    handleClose();
  }, [poolSelected]);

  const handleModalOpen = () => setPoolSelected(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="text-white w-[93%] p-3 m-auto border border-[#4C5C68] bg-[#2A2B30] rounded-md">
      <h1 className="title text-2xl font-bold">
        {lockswapContent[type].title}{" "}
      </h1>
      <h1 className="description text-[9px] font-bold mt-2">{description}</h1>
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
            />
          </span>
          <span className="col-span-5 ms-auto  ">
            <span className="flex justify-end">
              <button
                onClick={() => {
                  handleModalOpen();
                  handleOpen();
                }}
                className="flex justify-center border  text-sm p-0.5 rounded-md gap-1 bg-[#383941] border-[#4C5C68]"
              >
                <img src={imgUrl} alt="" className="w-8" />
                <h3 className="mt-1 font-extrabold text-sm me-2">DRAGON</h3>
              </button>
            </span>
            <h3 className="mt-1 font-bold text-[9px] me-2">
              Balance:{lp_balance}
            </h3>
          </span>
        </div>
      </div>
      <div className="p-3  flex justify-center text-center">
        <button className="border w-full p-2 rounded-md bg-[#FF6B00] border-[#383941] font-extrabold mt-2 hover:bg-[#FF6B00]/70">
          <span className="">{btn}</span>
        </button>
      </div>
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
