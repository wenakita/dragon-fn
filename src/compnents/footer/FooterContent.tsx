import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from "react-icons/fa6";

function FooterContent() {
  return (
    <div className="text-white grid md:grid-cols-2 lg:grid-cols-8 mt-30 mb-4">
      <div className="sm:hidden md:block me-auto lg:col-span-3">
        <div className=" flex  gap-3 ">
          <img
            src="src/assets/outline.png"
            className="size-20 ms-8  mt-1 border border-0 rounded-full"
          />
          <div className=" w-full mt-auto mb-auto flex gap-2">
            <h1 className="whitespace-nowrap mt-1.5 font-bold text-lg">
              Built on
            </h1>
            <img
              src="https://layerzero.network/static/logo.svg"
              className="size-30 h-10"
            />
          </div>
        </div>
        <div className="flex mt-4 ms-12 gap-4 text-[30px] text-white/80">
          <FaTwitter />
          <FaDiscord />
          <FaTelegramPlane />
          <FaGithub />
          <FaMedium />
        </div>
        <div className="text-white/60 ms-12 mt-2 font-medium">
          © 2025 Dragon
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-flow-col lg:col-span-4 lg:m-auto  sm:gap-10 lg:gap-30 p-5 sm:ms-5 ">
        <div className=" ">
          <h1 className="font-bold text-lg">Community</h1>
          <div className="text-md text-white/70 mt-1  grid grid-flow-row gap-1">
            <h3>Telegram</h3>
            <h3>Github</h3>
            <h3>X</h3>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <h1 className="font-bold text-lg">Tools</h1>
            <div className="text-md text-white/70 mt-1  grid grid-flow-row gap-1">
              <h3>CoinGecko</h3>
              <h3>CoinMarketCap</h3>
              <h3>Dexscreener</h3>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <h1 className="font-bold text-lg">Information</h1>
            <div className="text-md text-white/70 mt-1  grid grid-flow-row gap-1">
              <h3>v1 Docs</h3>
              <h3>FAQ</h3>
              <h3>Inquiries</h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-9 block md:hidden ">
        <div className="flex gap-3  h-10   w-full">
          <h1 className="whitespace-nowrap mt-1 font-bold text-lg">Built on</h1>
          <img
            src="https://app.maiadao.io/static/media/layerzero-logo.35ea7c9614607ebd13db7039f6236b46.svg"
            className="size-25   h-10"
          />
        </div>

        <div className="flex gap-3  mt-2 text-[20px] md:text-[24px] text-white/80 ">
          <FaTwitter />
          <FaDiscord />
          <FaTelegramPlane />
          <FaGithub />
          <FaMedium />
        </div>
        <h1 className="whitespace-nowrap mt-3 font-medium text-md text-white/50">
          © 2025 Dragon
        </h1>
      </div>
    </div>
  );
}

export default FooterContent;
