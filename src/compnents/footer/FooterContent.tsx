import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaGithub, FaMedium, FaTwitter } from "react-icons/fa6";

function FooterContent() {
  return (
    <div className="text-white grid md:grid-cols-2 ">
      <div className=" invisible  border">
        <div className=" p-2 ">
          <div className="flex">
            <img
              src="src/assets/dragon.png"
              className="w-20 mt-1 h-15 border border-0 rounded-full"
            />
            <div className=" gap-3    w-full">
              <h1 className="whitespace-nowrap  font-bold text-lg">Built on</h1>
              <img
                src="https://app.maiadao.io/static/media/layerzero-logo.35ea7c9614607ebd13db7039f6236b46.svg"
                className="size-20"
              />
            </div>
          </div>

          <div className="flex gap-2 text-[25px] text-white/80">
            <FaTwitter />
            <FaDiscord />
            <FaTelegramPlane />
            <FaGithub />
            <FaMedium />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-5 ">
        <div className=" ">
          <h1 className="font-bold text-lg">Community</h1>
          <div className="text-md text-white/70 mt-1 ">
            <h3>Telegram</h3>
            <h3>Github</h3>
            <h3>X</h3>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <h1 className="font-bold text-lg">Tools</h1>
            <div className="text-md text-white/70 mt-1 ">
              <h3>CoinGecko</h3>
              <h3>CoinMarketCap</h3>
              <h3>Dexscreener</h3>
            </div>
          </div>
        </div>
        <div className="">
          <div className=" ">
            <h1 className="font-bold text-lg">Information</h1>
            <div className="text-md text-white/70 mt-1 ">
              <h3>v1 Docs</h3>
              <h3>FAQ</h3>
              <h3>Inquiries</h3>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-2 md:hidden">
        <div className="flex gap-3  h-20   w-full">
          <h1 className="whitespace-nowrap mt-8 font-bold text-lg">Built on</h1>
          <img
            src="https://app.maiadao.io/static/media/layerzero-logo.35ea7c9614607ebd13db7039f6236b46.svg"
            className="size-25"
          />
        </div>
        <div className="flex gap-2 text-[25px] text-white/80">
          <FaTwitter />
          <FaDiscord />
          <FaTelegramPlane />
          <FaGithub />
          <FaMedium />
        </div>
      </div>
    </div>
  );
}

export default FooterContent;
