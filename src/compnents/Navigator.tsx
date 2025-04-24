import { useEffect, useState } from "react";
import ConnectWalletBtn from "./buttons/ConnectWalletBtn";
import { useWallets } from "@privy-io/react-auth";
import { FiMenu } from "react-icons/fi";
import imgUrl from "../assets/dragon.png";
import NavigatorMenu from "./NavigatorMenu";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
function Navigator() {
  const { wallets } = useWallets();
  const [address, setAddress] = useState<any | null>(null);
  useEffect(() => {
    if (wallets.length > 0 && wallets[0].address) {
      setAddress(wallets[0].address as `0x${string}`);
    }
  }, [wallets]);

  return (
    <div className="border border-[#4C5C68] border-t-0 border-l-0 border-r-0 rounded-md  p-2 text-white flex justify-between">
      <span className="flex gap-3">
        <img src={imgUrl} alt="" className="w-[40px]" />

        {/* <h1 className="mt-auto mb-auto">Dragon</h1> */}
      </span>
      {/* <ConnectWalletBtn color="green-600" /> */}
      <span className="mt-auto mb-auto flex   ">
        <NavigatorMenu />
        <ConnectWalletBtn />
      </span>
    </div>
  );
}

export default Navigator;
