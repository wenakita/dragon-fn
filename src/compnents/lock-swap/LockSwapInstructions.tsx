function LockSwapInstructions() {
  return (
    <div className="p-5">
      <h3 className="mb-5 font-semibold">Locking LP tokens</h3>
      <ol
        data-testid="timeline-component"
        className="relative border-l-2 border-accent-20   border-zinc-800"
      >
        {/* Step 1 */}
        <li data-testid="timeline-item" className="mb-10 ml-6 !mb-6">
          <div
            data-testid="timeline-point"
            className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  border-accent-10 bg-zinc-800 border-zinc-800 "
          >
            <div className="text-xs font-bold text-accent-10">1</div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-accent-70">
            Select the amount of <strong>Dragon LP</strong>tokens you want to
            lock.
          </time>
        </li>

        {/* Step 2 */}
        <li data-testid="timeline-item" className="mb-10 ml-6 !mb-6">
          <div
            data-testid="timeline-point"
            className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  border-accent-10 bg-zinc-800 border-zinc-800 "
          >
            <div className="text-xs font-bold text-accent-10">2</div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-accent-70">
            The minimum lock time is <strong>1 week</strong>
          </time>
        </li>

        {/* Step 3 */}
        <li data-testid="timeline-item" className="mb-10 ml-6 !mb-6">
          <div
            data-testid="timeline-point"
            className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  border-accent-10 bg-zinc-800 border-zinc-800 "
          >
            <div className="text-xs font-bold text-accent-10">1</div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-accent-70">
            Confirm you have enough Dragon LP tokens to lock
          </time>
        </li>

        {/* Step 4 */}
        <li data-testid="timeline-item" className="mb-10 ml-6 !mb-6">
          <div
            data-testid="timeline-point"
            className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full  border-accent-10 bg-zinc-800 border-zinc-800 "
          >
            <div className="text-xs font-bold text-accent-10">4</div>
          </div>
          <time className="mb-1 text-sm font-normal leading-none text-accent-70">
            Confirm & Process Transaction!
          </time>
        </li>
      </ol>
    </div>
  );
}

export default LockSwapInstructions;
