import { usePrivy } from "@privy-io/react-auth";
import useWalletStatus from "../../hooks/useWallletStatus";
function ConnectWalletBtn({ color }: any) {
  const isLoggedIn = useWalletStatus();
  const { login } = usePrivy();
  console.log(isLoggedIn);

  function CheckElement() {
    if (isLoggedIn) {
      return (
        <button
          onClick={() => {
            // checkUserStatus();
          }}
          className="border border-orange-500/50 hover:animate-pulse rounded-full bg-[#FFC857]"
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
      );
    } else {
      return (
        <button
          type="button"
          className="text-[#34363f] text-sm font-extrabold border border-[#4C5C68] p-1.5 rounded-3xl bg-[#FFC857]"
          onClick={login}
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
