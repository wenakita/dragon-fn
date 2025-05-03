import React, { useEffect, useState } from "react";

function NavigatorDrawerTabs({ tab, handleTabChange }: any) {
  useEffect(() => {
    console.log(tab);
  }, [tab]);

  return (
    <div className="flex gap-3 text-white/80 text-sm font-bold cursor-pointer">
      <button
        className="text-white cursor-pointer"
        onClick={() => {
          handleTabChange("tokens");
        }}
      >
        Tokens
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleTabChange("votes");
        }}
      >
        Votes
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleTabChange("pools");
        }}
      >
        Pools
      </button>
      <button
        className="cursor-pointer"
        onClick={() => {
          handleTabChange("locks");
        }}
      >
        Locks
      </button>
    </div>
  );
}

export default NavigatorDrawerTabs;
