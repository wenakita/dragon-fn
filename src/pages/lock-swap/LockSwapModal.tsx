import React from "react";
import imgUrl from "../../assets/dragon.png";
//{ title, description, logo, token_name }
function LockSwapModal() {
  return (
    <div className="text-white w-[93%] p-3 m-auto border border-[#4C5C68] bg-[#2A2B30] rounded-md">
      <h1 className="title text-2xl font-bold">Lock </h1>
      <h1 className="description text-[9px] font-bold mt-2">
        Lock LP tokens to boost voting power, improve lottery odds, earn
        exclusive rewards, and gain long-term yield and protection.**
        impermanent loss.{" "}
      </h1>
      <div className="mt-4 border border-[#4C5C68] bg-[#2A2B30] rounded-lg p-3">
        <h3 className="text-xs font-bold" style={{ color: "#B0B3BA" }}>
          From
        </h3>
        <div className="grid grid-cols-6 mt-2">
          <span className=" col-span-4">
            <input type="number" placeholder="0" className="text-xl" />
          </span>
          <span className="col-span-2 ms-auto">
            <button
              disabled={true}
              className="flex justify-center border text-sm p-0.5 rounded-md gap-1 bg-[#383941] border-[#4C5C68]"
            >
              <img src={imgUrl} alt="" className="w-8" />
              <h3 className="mt-1 font-extrabold text-xs me-2">DRAGON</h3>
            </button>
          </span>
        </div>
      </div>
      <div className="p-3  flex justify-center text-center">
        <button className="border w-full p-2 rounded-md bg-[#FF6B00] border-[#383941] font-bold mt-2 hover:bg-[#FF6B00]/70">
          <span className="">Approve Spending</span>
        </button>
      </div>
    </div>
  );
}

export default LockSwapModal;
