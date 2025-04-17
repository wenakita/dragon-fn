function InstructionListItem({ instruction, step }: any) {
  return (
    <li className="mb-10 ml-6" data-testid="timeline-item">
      <div
        className="absolute -left-3 flex h-6 w-6 border  border-zinc-800  bg-zinc-800 items-center justify-center rounded-full bg-accent-10 ring-0 dark:ring-0 ring-white"
        data-testid="timeline-point"
      >
        <div className="text-xs font-bold">{step}</div>
      </div>
      <time className="mb-1 text-sm font-normal leading-none text-accent-70">
        {instruction}
      </time>
    </li>
  );
}

export default InstructionListItem;
