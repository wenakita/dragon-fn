import React, { useState } from "react";
import { usePrivy } from "@privy-io/react-auth";
function ConnectWalletBtn({ color }: any) {
  const { ready, login, logout, authenticated } = usePrivy();

  console.log(color);
  function checkUserStatus() {
    if (authenticated && ready) {
      console.log("Logged In");
      logout();
    } else {
      console.log("Logged Out");
      login();
    }
  }

  function getText() {
    if (authenticated && ready) {
      console.log("Logged In");
      return "Logout";
    } else {
      console.log("Logged Out");
      return "Log in";
    }
  }

  function Status() {
    console.log(color);
    const custom_class = `border border-red-800 bg-${color} p-1.5 rounded-lg font-bold text-sm`;
    return (
      <span>
        <button
          className={custom_class}
          onClick={() => {
            checkUserStatus();
          }}
        >
          {getText()}
        </button>
      </span>
    );
  }

  //mt-auto mb-auto

  return <Status />;
}

export default ConnectWalletBtn;
