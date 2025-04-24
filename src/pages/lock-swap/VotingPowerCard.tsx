import React from "react";
import { Card, CardContent } from "@mui/material";
import { FaBoltLightning } from "react-icons/fa6";
import { useUserStats } from "../../hooks/useUserStats";
function VotingPowerCard() {
  const user_stats = useUserStats();
  return (
    <Card
      variant="outlined"
      className="  w-50 p-3"
      sx={{ backgroundColor: "#2A2B30", borderColor: "#4C5C68" }}
    >
      <span className="text-md font-bold" style={{ color: "#F4F4F5" }}>
        <span className="flex justify-between gap-2">
          <h3 className="text-[14px] whitespace-nowrap">Your Stats</h3>
          <FaBoltLightning
            className="mt-1 text-sm"
            style={{ color: "#FFC857" }}
          />
        </span>
        <span className="grid grid-rows-3 font-bold text-[12px] gap-1 mt-2">
          <span className="flex justify-between">
            <h3>LP Locked</h3>
            <h3>-</h3>
          </span>
          <span className="flex justify-between">
            <h3>Total Voting Power</h3>
            <h3>-</h3>
          </span>{" "}
          <span className="flex justify-between">
            <h3>Jackpots Won</h3>
            <h3>-</h3>
          </span>
        </span>
      </span>
    </Card>
  );
}

export default VotingPowerCard;
