import HomeGrid from "../compnents/HomeGrid";
function Home() {
  return (
    <div className="">
      {/* <HomeGrid /> */}
      <div className="grid grid-rows-1 border border-white">
        <div className="relative border border-white">
          <img
            src="https://static.vecteezy.com/system/resources/previews/042/190/797/non_2x/ai-generated-medieval-castles-and-kingdoms-game-background-free-photo.jpg"
            alt="BannerImage"
            className="h-[70vh] lg:h-[80vh] w-full object-cover"
          />

          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent mix-blend-multiply pointer-events-none"></div>

          {/* Text overlay */}
          <div className="absolute inset-0">
            <div className="border border-white">
              <h1 className="text-white text-sm font-extrabold mt-10 flex justify-center">
                Enter for a chance to $$$
              </h1>
              <h1 className="text-white text-2xl font-extrabold  flex justify-center">
                Win Large Jackpots!
              </h1>
              <span className="flex justify-center me-6 mt-5">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/035/874/646/non_2x/ai-generated-dragon-face-isolated-on-transparent-background-free-png.png"
                  alt="ai-generated-dragon-face-isolated-on-transparent-background-free-png-removebg-preview"
                  className="w-[40%] md:w-[20%] "
                />
              </span>
            </div>
            {/* add good dragon image under this live feed under this banner */}
          </div>
        </div>
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
