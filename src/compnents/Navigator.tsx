import ConnectWalletBtn from "./ConnectWalletBtn";

function Navigator() {
  return (
    <div className="border border-stone-900 rounded-md  p-2 text-white flex justify-between">
      <span className="flex gap-3">
        <img src="/logo.png" alt="" className="w-[40px]" />
        {/* <h1 className="mt-auto mb-auto">Dragon</h1> */}
      </span>
      <ConnectWalletBtn color="green-600" />
    </div>
  );
}

export default Navigator;
