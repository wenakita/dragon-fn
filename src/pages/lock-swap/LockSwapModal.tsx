import React from "react";
import imgUrl from "../../assets/dragon.png";
import lockswapContent from "../../../config/LockSwapContent";
//{ title, description, logo, token_name }
function LockSwapModal({ type }: any) {
  console.log(lockswapContent[type]);
  const { title, description, btn } = lockswapContent[type];
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
            <input type="number" placeholder="0" className="text-xl h-full" />
          </span>
          <span className="col-span-5 ms-auto ">
            <span className="">
              <button
                disabled={true}
                className="flex justify-center border  text-sm p-0.5 rounded-md gap-1 bg-[#383941] border-[#4C5C68]"
              >
                <img src={imgUrl} alt="" className="w-8" />
                <h3 className="mt-1 font-extrabold text-sm me-2">DRAGON</h3>
              </button>
            </span>
            <h3 className="mt-1 font-bold text-[9px] me-2">Balance:</h3>
          </span>
        </div>
      </div>
      <div className="p-3  flex justify-center text-center">
        <button className="border w-full p-2 rounded-md bg-[#FF6B00] border-[#383941] font-extrabold mt-2 hover:bg-[#FF6B00]/70">
          <span className="">{btn}</span>
        </button>
      </div>
    </div>
  );
}

export default LockSwapModal;
