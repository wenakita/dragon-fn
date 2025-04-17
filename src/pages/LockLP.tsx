import LPLockMenu from "../compnents/LPLockMenu";

function LockLP() {
  const available_tokens = [
    {
      pair1: "RedDragon",
      pair2: "Wrapped Sonic",
      address: "0x12345...",
      pair1_logo: "http://localhost:5173/logo.png",
      pair2_logo:
        "https://coin-images.coingecko.com/coins/images/38108/large/200x200_Sonic_Logo.png?1734679256",
    },
    {
      pair1: "RedDragon",
      pair2: "Wrapped Sonic",
      address: "0x12345...",
      pair1_logo: "http://localhost:5173/logo.png",
      pair2_logo:
        "https://coin-images.coingecko.com/coins/images/38108/large/200x200_Sonic_Logo.png?1734679256",
    },
  ];
  return (
    <div className="md:w-[80%] m-auto  ">
      <LPLockMenu available_pairs={available_tokens} />
    </div>
  );
}

export default LockLP;
