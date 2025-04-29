import React from "react";

function NavigatorDrawerTabs() {
  return (
    <div className="flex gap-3 text-white/80 text-sm font-bold">
      <h3 className="text-white">Tokens</h3>
      <h3>Votes</h3>
      <h3>Pools</h3>
      <h3>Locks</h3>
    </div>
  );
}

export default NavigatorDrawerTabs;
