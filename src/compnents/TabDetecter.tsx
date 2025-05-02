import { FaWallet } from "react-icons/fa";

function TabDetector({ type, balances }: any) {
  console.log(balances);
  const DetectElement = ({ type, balances }: any) => {
    switch (type) {
      case "tokens":
        return <Tokens balances={balances} />;
        break;
      case "locks":
        return <Locks balances={balances} />;
        break;
      case "votes":
        return <Votes balances={balances} />;
        break;
      case "pools":
        return <Pools balances={balances} />;
        break;
    }
  };

  function isEmpty({ balances }: any) {
    if (balances) {
      return (
        balances.tokens.dragon.balance > 0 && balances.tokens.lp.balance > 0
      );
    }
    return true;
  }

  function Tokens({ balances }: any) {
    const notEmpty = isEmpty(balances);
    return (
      <>
        {balances !== null && notEmpty ? (
          <div className=" flex justify-between">
            <div className="flex gap-4">
              <div className="relative size-9">
                {/* Main image or content */}
                <img
                  src="https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38.png"
                  alt="https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38.png"
                  className="w-full h-full rounded-lg object-cover"
                />

                {/* Badge in bottom-right */}
                <div className="absolute bottom-1 left-5 rig top-4.5 size-5 rounded-md border-2 border-[#4C5C68] bg-[#4C5C68] overflow-hidden">
                  <img
                    src="https://raw.githubusercontent.com/balancer/tokenlists/main/src/assets/images/tokens/0x039e2fb66102314ce7b64ce5ce3e5183bc94ad38.png"
                    alt="Badge"
                    className="w-full h-full object-cover bg-stone-500"
                  />
                </div>
              </div>
              <div className="grid grid-rows-2 text-white font-bold">
                <h3 className="text-sm">Wrapped Sonic</h3>
                <h3 className="text-xs">wS</h3>
              </div>
            </div>
            <div className="text-white grid grid-rows-2">
              <h3 className="text-sm">$200.00</h3>
              <h3 className="text-sm">45,000</h3>
            </div>
          </div>
        ) : (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        )}
      </>
    );
  }
  function Locks({ balances }: any) {
    return (
      <>
        {balances.lockInfo ? (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        ) : (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        )}
      </>
    );
  }
  function Votes({ balances }) {
    return (
      <>
        {balances.votingPower ? (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        ) : (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        )}
      </>
    );
  }
  function Pools({ balances }) {
    return (
      <>
        {balances.lockInfo ? (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        ) : (
          <div className="mt-5 p-10 text-center text-white text-sm drawer-content-goes-here-tokens-etc">
            <span>
              <FaWallet className="text-[50px] text-white/50 m-auto" />
              <h3 className="font-bold mt-3">No Tokens Yet</h3>
              <h3 className="text-white/70 ">
                Buy or s tokens to this wallet to get started.
              </h3>
            </span>
          </div>
        )}
      </>
    );
  }

  return DetectElement({ type, balances });
}

export default TabDetector;
