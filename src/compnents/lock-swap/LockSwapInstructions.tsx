function LockSwapInstructions({ input }: any) {
  console.log(input);
  return (
    <div className="p-5">
      <h3 className="mb-5 font-semibold">Locking LP tokens</h3>
      <ol
        data-testid="timeline-component"
        className="relative border-l-2 border-accent-20   border-zinc-800"
      >
        {input !== 0 ? <>hey</> : <h1>yl</h1>}
      </ol>
    </div>
  );
}

export default LockSwapInstructions;
