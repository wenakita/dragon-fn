import React, { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
function ConnectWalletBtn({ color }: any) {
  const { ready, login, logout, authenticated } = usePrivy();

  function checkUserStatus() {
    if (authenticated && ready) {
      logout();
    } else {
      login();
    }
  }

  function getText() {
    if (authenticated && ready) {
      return "Logout";
    } else {
      return "Log in";
    }
  }

  function Status() {
    return (
      <span className="">
        <button
          onClick={() => {
            checkUserStatus();
          }}
          className="border border-orange-500/50 hover:animate-pulse rounded-full bg-stone-900"
        >
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
        </button>
      </span>
    );
  }

  //mt-auto mb-auto

  return <Status />;
}

export default ConnectWalletBtn;
