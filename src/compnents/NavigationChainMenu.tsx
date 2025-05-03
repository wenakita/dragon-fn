import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  NetworkArbitrumOne,
  NetworkBase,
  NetworkSonic,
} from "@web3icons/react";
import { IoIosArrowDown } from "react-icons/io";
export default function NavigationChainMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          color: "black",
        }}
      >
        <span className="border-1 border-none mt-1 rounded-md flex gap-1 ">
          <NetworkSonic variant="mono" size="25" color="#FFFFFF" />
          <IoIosArrowDown className="mt-1.5 font-bold text-white" />
        </span>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: "#1E1F24",
            color: "white", // change to your desired color
          },
        }}
      >
        <span className="grid grid-flow text-xs">
          <MenuItem className="flex gap-2">
            <NetworkSonic
              variant="mono"
              size="20"
              color="#FFFFFF"
              className="border border-0 rounded-md bg-orange-500"
            />
            <h3 className="text-sm">Sonic</h3>
          </MenuItem>
          <MenuItem className="flex gap-2">
            <NetworkArbitrumOne
              variant="background"
              size="20"
              className="border rounded-md border-0"
            />
            <h3 className="text-sm">Arbitrum</h3>
          </MenuItem>
          <MenuItem className="flex gap-2">
            <NetworkBase
              variant="background"
              size="20"
              className="border rounded-md border-0"
            />
            <h3 className="text-sm">Base</h3>
          </MenuItem>
        </span>
      </Menu>
    </div>
  );
}
