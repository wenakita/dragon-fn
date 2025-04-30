import { usePrivy, useWallets } from "@privy-io/react-auth";
import useWalletStatus from "../../hooks/useWallletStatus";
import { useState } from "react";
import NavigationDrawer from "../NavigationDrawer";
function ConnectWalletBtn({ color }: any) {
  const { login, logout } = usePrivy();
  const { wallets } = useWallets();
  const isLoggedIn = useWalletStatus();
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  function CheckElement() {
    console.log(`is logged in? : ${isLoggedIn}`);
    if (isLoggedIn) {
      return (
        <>
          <NavigationDrawer
            open={open}
            setOpen={setOpen}
            toggleDrawer={toggleDrawer}
            wallets={wallets}
          />
        </>
      );
    } else {
      return (
        <button
          type="button"
          className="text-white fotn-semibold text-sm font-extrabold bg-[#FF6B00] border border-[#4C5C68] p-1.5 rounded-full text-xs px-3 mt-1.5   hover:bg-[#FF6B00]/70"
          onClick={() => {
            login();
          }}
        >
          Connect Wallet
        </button>
      );
    }
  }

  function Status() {
    return (
      <span className="">
        <CheckElement />
      </span>
    );
  }

  //mt-auto mb-auto

  return <Status />;
}

export default ConnectWalletBtn;
