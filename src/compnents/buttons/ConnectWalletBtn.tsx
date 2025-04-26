import { usePrivy, useWallets } from "@privy-io/react-auth";
import useWalletStatus from "../../hooks/useWallletStatus";
function ConnectWalletBtn({ color }: any) {
  const { login, logout } = usePrivy();
  const { wallets } = useWallets();
  const isLoggedIn = useWalletStatus();

  function CheckElement() {
    console.log(`is logged in? : ${isLoggedIn}`);
    if (isLoggedIn) {
      return (
        <button
          className="mt-1.5 border border-orange-500/50 hover:animate-pulse rounded-full bg-[#2A2B30] p-[3px]"
          onClick={() => {
            logout();
          }}
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
              {wallets && wallets[0].address.slice(0, 6)}...
              {wallets[0].address.slice(-4)}
            </h3>
          </span>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          className="text-white fotn-semibold text-sm font-extrabold border border-[#4C5C68] p-1.5 rounded-3xl bg-[#FF6B00]"
          onClick={() => {
            login();
          }}
        >
          Log in
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
