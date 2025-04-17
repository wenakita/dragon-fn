function HomeBanner() {
  return (
    <>
      <div className="border border-none rounded-md p-2 flex justify-between bg-gradient-to-r from-red-500 to-orange-500 ">
        <h3 className=" text-white font-bold font-mono text-xs md:text-[17px] mt-auto mb-auto  flex align-text-bottom">
          Win big with DRAGON — a deflationary token powered by a verifiable
          lottery, jackpot rewards up to 69%, and bulletproof security with no
          minting or blacklist functions.
        </h3>
        <img
          src="https://static.vecteezy.com/system/resources/previews/008/854/512/non_2x/casino-jackpot-3d-design-elements-free-png.png"
          alt=""
          className="w-25"
        />
      </div>
    </>
  );
}

export default HomeBanner;
