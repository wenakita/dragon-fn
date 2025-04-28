import { FaBookOpen, FaVoteYea } from "react-icons/fa";
import HomeGrid from "../compnents/HomeGrid";
import { MdOutlineHowToVote } from "react-icons/md";
function Home() {
  return (
    <div className="mt-10 container">
      <div className="">
        <h3 className="text-white  text-center m-auto text-[2.9em]  font-bold font-sans whitespace-wrap ">
          Harness the Fire of DeFi
        </h3>
        <h3 className="text-center mt-3 text-white font-extralight text-lg w-[90%]  ms-auto me-auto">
          Empowering traders with jackpot rewards, ve8020 staking, and a
          sustainable tokenomics model that burns and boosts with every move.
        </h3>
      </div>
      <div className="flex justify-center gap-3 mt-5 text-white font-bold ">
        <button className="border p-2 rounded-md border-[#FF6B00] bg-[#FF6B00] w-25">
          <span className="flex justify-center gap-2.5">
            <FaBookOpen className="mt-1" />
            <h3>Docs</h3>
          </span>
        </button>
        <button className="border border-[#FF6B00] p-2 rounded-md  bg-[#FF6B00] w-25">
          <span className="flex justify-center gap-2.5">
            <FaVoteYea className="mt-1" />
            <h3>Vote</h3>
          </span>
        </button>
      </div>
    </div>
  );
}

export default Home;

// url: https://png.pngtree.com/png-clipart/20240219/original/pngtree-red-dragon-full-body-on-white-background-png-image_14356996.png
//TO DO: WE ARE SETTING UP A ONE PAGE SIMPLE UI I USE ROUTES JUST IN CASE
//UI MY FOLLOW JUST BET UI STYLE 1ST ONE ON NAVBAR
//sEE WHAT CONTRRACT DOES
//LOOK AT STAKE AS WELL
