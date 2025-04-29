import { usePrivy, useWallets } from "@privy-io/react-auth";
import useWalletStatus from "../../hooks/useWallletStatus";
function ConnectWalletBtn({ color }: any) {
  const { login, logout } = usePrivy();
  const { wallets } = useWallets();
  const isLoggedIn = useWalletStatus();

  function CheckElement() {
    console.log(`is logged in? : ${isLoggedIn}`);
    if (isLoggedIn) {
      return null;
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
