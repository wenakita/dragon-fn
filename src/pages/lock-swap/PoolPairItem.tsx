import { Badge } from "@mui/material";
import React from "react";

function PoolPairItem({ pool, setPoolSelected }: any) {
  const { name, symbol, address, logo1, logo2 } = pool;
  return (
    <div className="">
      <button
        className=" w-full flex gap-2 whitespace-nowrap  bg-[#2A2B30] hover:bg-[#2A2B30]/90"
        onClick={() => {
          setPoolSelected(pool);
        }}
      >
        <img src={logo1} alt="" className="mt-1 size-7" />

        <span className="grid grid-rows-2 gap-0 font-bold  text-start">
          <h3 className="text-[15px]">{name}</h3>
          <span className="grid grid-cols-2 gap-2" style={{ color: "#B0B3BA" }}>
            <h3 className="text-[12px]">{symbol}</h3>
            <h3 className="text-[12px]">
              {address.slice(0, 4)}...{address.slice(-4)}
            </h3>
          </span>
        </span>
      </button>
    </div>
  );
}

export default PoolPairItem;
