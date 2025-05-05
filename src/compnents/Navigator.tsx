import { useEffect, useState } from "react";
import ConnectWalletBtn from "./buttons/ConnectWalletBtn";
import { useWallets } from "@privy-io/react-auth";
import { FiMenu } from "react-icons/fi";
import imgUrl from "../assets/dragon.png";
import NavigatorMenu from "./NavigaitonMenu.tsx";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import NavigationDrawer from "./NavigationDrawer";
import useBalances from "../hooks/useBalances";
import NavigationChainMenu from "./NavigationChainMenu";
function Navigator() {
  const balances = useBalances();
  const { wallets } = useWallets();
  const [address, setAddress] = useState<any | null>(null);
  useEffect(() => {
    if (wallets.length > 0 && wallets[0].address) {
      setAddress(wallets[0].address as `0x${string}`);
    }
  }, [wallets]);
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="border border-[#4C5C68] border-t-0 border-l-0 border-r-0 rounded-md  p-2.5 text-white flex justify-between">
      <div className="flex gap-3 md:gap-8">
        <img
          src={"src/assets/outline.png"}
          alt=""
          className="size-9 mt-auto mb-auto"
        />
        <span className="visible md:hidden ">
          <NavigationChainMenu />
        </span>
        <div className="hidden md:block md:flex gap-8 text-white/80 mt-1 text-sm font-semibold  items-center">
          <h3>Dashboard</h3>
          <h3>Lock</h3>
          <h3>Vote</h3>
          <h3>Docs</h3>
        </div>
        {/* <h1 className="mt-auto mb-auto">Dragon</h1> */}
      </div>
      {/* <ConnectWalletBtn color="green-600" /> */}
      <span className="mt-auto mb-auto flex  gap-0.5  ">
        <span className="invisible md:visible  ">
          <NavigationChainMenu />
        </span>
        <span className="visible md:hidden">
          <NavigatorMenu />
        </span>
        <ConnectWalletBtn />
      </span>
    </div>
  );
}

export default Navigator;
