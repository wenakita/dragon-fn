import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

export default function LockSlider({ lockTime, setLockTime }: any) {
  async function getValue(e: any) {
    setLockTime(e.target.value);
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        aria-label="Always visible"
        defaultValue={0}
        value={lockTime}
        onChange={getValue}
        step={7}
        max={70}
        sx={{
          color: "#FF6B00",
          height: 8,
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-thumb": {
            height: 24,
            width: 24,
            backgroundColor: "#fff",
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit",
            },
            "&::before": {
              display: "none",
            },
          },
          "& .MuiSlider-valueLabel": {
            lineHeight: 1.2,
            fontSize: 12,
            background: "unset",
            padding: 0,
            width: 32,
            height: 32,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: "#52af77",
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&::before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
              transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
              transform: "rotate(45deg)",
            },
          },
        }}
      />
    </Box>
  );
}
