import { RiErrorWarningLine } from "react-icons/ri";
function LockSwapFooter() {
  return (
    <div className="grid grid-cols-12 text-red-800 border bg-red-900/30  border-zinc-900 rounded-lg p-3 text-[10px] font-mono">
      <RiErrorWarningLine className="size-5" />
      <h3 className="col-span-11">
        Locking your LP tokens in the Red Dragon ecosystem boosts your voting
        power, enhances your lottery chances, unlocks exclusive rewards, and
        provides long-term yield opportunities and protection against
        impermanent loss.
      </h3>
    </div>
  );
}

export default LockSwapFooter;
