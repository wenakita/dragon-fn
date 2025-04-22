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
