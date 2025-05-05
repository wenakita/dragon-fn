import React from "react";
import { FaBookOpen, FaVoteYea } from "react-icons/fa";
import sonicword from "../../assets/sonicword.svg";
function HomeHero() {
  return (
    <>
      <div className="">
        <h3
          className="text-white whitespace-nowrap
         text-center m-auto text-[1.59rem]  font-bold font-sans whitespace-wrap "
        >
          Yield-Driven Ecosystem
        </h3>
        <h3 className="text-center mt-3 text-white font-extralight text-lg w-[90%]  ms-auto me-auto">
          Empowering traders with jackpot rewards, ve8020 staking, and a
          sustainable tokenomics model that burns and boosts with every move.
        </h3>
      </div>
      <div className="flex justify-center gap-3 mt-5 text-white font-bold ">
        <button className="text-sm  font-light px-3 border  rounded-md border-[#FF6B00] h-7 bg-[#ff6a00d0]">
          <span className="flex justify-center gap-2.5">
            <h3>Documentation</h3>
          </span>
        </button>
        <button className="border border-[#FF6B00] px-3  text-sm font-light rounded-md  bg-[#FF6B00] ">
          <span className="flex justify-center gap-2.5">
            <h3>Community</h3>
          </span>
        </button>
      </div>
      <div className="m-auto grid grid-flow-col gap-2 mt-2 p-10 ">
        <img
          src="https://file.notion.so/f/f/80206c3c-8bc5-49a2-b0cd-756884a06880/4b51ccd5-9f3b-4a68-ade1-e95efbbe61d0/0923_Arbitrum_Logos_WhiteText_horizontal_RGB.png?table=block&id=72435a39-1f83-4c0d-9c57-6964a8ec9498&spaceId=80206c3c-8bc5-49a2-b0cd-756884a06880&expirationTimestamp=1746482400000&signature=E9F-ypL74wsNm0vxZJmSuuki2LydiFJ6eeLzwLgezYo&downloadName=WhiteText_horizontal_RGB.png"
          alt=""
        />{" "}
        <img
          src="https://file.notion.so/f/f/80206c3c-8bc5-49a2-b0cd-756884a06880/4b51ccd5-9f3b-4a68-ade1-e95efbbe61d0/0923_Arbitrum_Logos_WhiteText_horizontal_RGB.png?table=block&id=72435a39-1f83-4c0d-9c57-6964a8ec9498&spaceId=80206c3c-8bc5-49a2-b0cd-756884a06880&expirationTimestamp=1746482400000&signature=E9F-ypL74wsNm0vxZJmSuuki2LydiFJ6eeLzwLgezYo&downloadName=WhiteText_horizontal_RGB.png"
          alt=""
        />
        {/* <img
          src="https://github.com/base/brand-kit/blob/main/logo/wordmark/Base_Wordmark_Blue.png?raw=true"
          alt=""
        />{" "} */}
        <img src="src/assets/sonicword.svg" alt="" />{" "}
        <img
          src="https://file.notion.so/f/f/80206c3c-8bc5-49a2-b0cd-756884a06880/4b51ccd5-9f3b-4a68-ade1-e95efbbe61d0/0923_Arbitrum_Logos_WhiteText_horizontal_RGB.png?table=block&id=72435a39-1f83-4c0d-9c57-6964a8ec9498&spaceId=80206c3c-8bc5-49a2-b0cd-756884a06880&expirationTimestamp=1746482400000&signature=E9F-ypL74wsNm0vxZJmSuuki2LydiFJ6eeLzwLgezYo&downloadName=WhiteText_horizontal_RGB.png"
          alt=""
        />
      </div>
    </>
  );
}

export default HomeHero;
