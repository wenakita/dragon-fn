import React from "react";
import { instructionList } from "../../dataSources/InstructionList";
import InstructionListItem from "./InstructionListItem";
function LockList() {
  return (
    <ol
      data-testid="timeline-component"
      className="relative border-l-2 border-accent-20   border-zinc-800 "
    >
      {instructionList.map((item: any, key: any) => {
        return (
          <InstructionListItem instruction={item.instruction} step={key + 1} />
        );
      })}
      {/* {input !== 0 ? <>hey</> : <h1>yl</h1>} */}
    </ol>
  );
}

export default LockList;
