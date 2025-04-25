import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const marks = [
  {
    value: 7,
    label: "1 week",
  },
  {
    value: 14,
    label: "2 weeks",
  },
  {
    value: 21,
    label: "37°C",
  },
  {
    value: 28,
    label: "100°C",
  },
  {
    value: 35,
    label: "100°C",
  },
];

export default function LockSlider() {
  return (
    <Box sx={{ width: "100%" }}>
      <Slider aria-label="Always visible" defaultValue={0} step={1} />
    </Box>
  );
}
