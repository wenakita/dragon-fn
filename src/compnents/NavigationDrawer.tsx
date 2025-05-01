import { Button, Drawer } from "@mui/material";
import React, { useState } from "react";
import WalletIcon from "./icons/WalletIcon";
import { usePrivy, useWallets } from "@privy-io/react-auth";
import { FaPowerOff, FaWallet } from "react-icons/fa";
import NavigatorDrawerTabs from "./NavigatorDrawerTabs";
import TabDetector from "./TabDetecter";
import useBalances from "../hooks/useBalances";

function NavigationDrawer({ open, setOpen, toggleDrawer, wallets }: any) {
  const { logout } = usePrivy();
  const balances = useBalances();
  const tokens = [];
  const [tab, setTab] = useState("tokens");
  const handleTabChange = (newValue: any) => {
    setTab(newValue);
  };
  return (
    <div className="">
      <button
        className="mt-1.5 border border-orange-500/50 hover:animate-pulse rounded-full bg-[#2A2B30] p-[3px]"
        onClick={toggleDrawer(true)}
      >
        <span className="flex gap-2 ">
          <svg
            height={25}
            viewBox="0 0 24 24"
            width={23}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              style={{
                transformOrigin: "center center",
              }}
            >
              <circle cx={12} cy={12} fill="#3C3D37" r={12} />
              <path
                clipRule="evenodd"
                d="M10.62 5.572a1.95 1.95 0 0 1 2.76 0l5.048 5.048a1.95 1.95 0 0 1 0 2.76l-5.048 5.048a1.95 1.95 0 0 1-2.76 0L5.571 13.38a1.95 1.95 0 0 1 0-2.76z"
                fill="#FF6B00"
                fillRule="evenodd"
              />
            </g>
          </svg>
          <h3 className="text-sm m-auto font-semibold p-0.5">
            {wallets[0] && wallets[0].address.slice(0, 6)}
            {"..."}
            {wallets[0] && wallets[0].address.slice(-4)}
          </h3>
        </span>
      </button>
      <Drawer open={open} onClose={toggleDrawer(false)} anchor="bottom">
        <div className="border border-[#4C5C68] bg-[#2A2B30]  p-4 ">
          <div className="flex justify-between">
            <span className="flex gap-2">
              <WalletIcon width={35} height={35} />
              <h3 className="text-white font-bold text-sm mt-1.5">
                {wallets[0] && wallets[0].address.slice(0, 6)}...
                {wallets[0] && wallets[0].address.slice(-4)}
              </h3>
              <div className="flex gap-1 mt-1 ">
                <a
                  href={
                    wallets[0]
                      ? `https://debank.com/profile/${wallets[0].address}`
                      : "https://static.debank.com/image/user/official_avatar/7706/60882bcdfbe1db996c219aa56e4d5a83.png"
                  }
                  target="_blank"
                  className=""
                >
                  <img
                    src="https://static.debank.com/image/user/official_avatar/7706/60882bcdfbe1db996c219aa56e4d5a83.png"
                    alt=""
                    className="size-5 border rounded-md "
                  />
                </a>

                <a href="https://debank.com/profile/" target="_blank">
                  <img
                    src="https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38.png"
                    alt=""
                    className="size-4.5"
                  />
                </a>
              </div>
            </span>
            <span
              className=" "
              onClick={() => {
                logout();
              }}
            >
              <FaPowerOff className=" text-2xl p-1 border-white bg-[#FF6B00] rounded-md text-[white] font-bold " />
            </span>
          </div>
          <div className="mt-5">
            <NavigatorDrawerTabs tab={tab} handleTabChange={handleTabChange} />
          </div>
          <div className="p-4">
            <TabDetector type={tab} balances={balances} />
          </div>
          <div className="mt-5">
            <button className="border w-full text-center p-2 rounded-lg text-white font-bold bg-[#FF6B00] border-[#FF6B00]">
              Lock Tokens
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default NavigationDrawer;
