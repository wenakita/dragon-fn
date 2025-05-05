import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMenu } from "react-icons/io5";

export default function NavigaitonMenu() {
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
      >
        <IoMenu className="text-[20px] text-white/70  mt-2" />
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
        <MenuItem onClick={handleClose}>Lock</MenuItem>
        <MenuItem onClick={handleClose}>Vote</MenuItem>
        <MenuItem onClick={handleClose}>Community</MenuItem>

        <MenuItem onClick={handleClose}>Documentation</MenuItem>
      </Menu>
    </div>
  );
}
