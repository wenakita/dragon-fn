import { useEffect, useState } from "react";
import ConnectWalletBtn from "./ConnectWalletBtn";
import { useWallets } from "@privy-io/react-auth";
import { FiMenu } from "react-icons/fi";
import NavigatorMenu from "./NavigatorMenu";
function Navigator() {
  const { wallets } = useWallets();
  const [address, setAddress] = useState<any | null>(null);
  useEffect(() => {
    if (wallets[0]) {
      setAddress(wallets[0].address);
    }
  }, [wallets]);
  return (
    <div className="border border-stone-900 rounded-md  p-2 text-white flex justify-between">
      <span className="flex gap-3">
        <img src="/logo.png" alt="" className="w-[40px]" />
        {/* <h1 className="mt-auto mb-auto">Dragon</h1> */}
      </span>
      {/* <ConnectWalletBtn color="green-600" /> */}
      <span className="mt-auto mb-auto flex gap-2">
        <img
          src="https://coin-images.coingecko.com/coins/images/38108/large/200x200_Sonic_Logo.png?1734679256"
          className="size-3 mt-1"
          alt=""
        />
        <h3 className="text-[8px] mt-1.5">
          {address && address.slice(0, 5) + "..." + address.slice(0, 3)}
        </h3>
        <NavigatorMenu />
      </span>
    </div>
  );
}

export default Navigator;
