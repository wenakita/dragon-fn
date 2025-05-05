import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoMenu } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLock, FaTelegramPlane, FaVoteYea } from "react-icons/fa";
import { Divider } from "@mui/material";
import { FaX } from "react-icons/fa6";

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
            borderRadius: "10 10 10 10",
            color: "white", // change to your desired color
          },
        }}
      >
        <MenuItem onClick={handleClose}>
          <span className="flex gap-2">
            <FaLock className="mt-1.5 text-xs" />

            <h3 className="font-bold text-sm text-white/90 mt-0.5">Lock</h3>
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="flex gap-2">
            <FaVoteYea className="mt-1 text-sm" />
            <h3 className="font-bold text-sm text-white/90 mt-0.5">Vote</h3>
          </span>
        </MenuItem>
        <Divider
          sx={{
            backgroundColor: "#383941",
            width: "90%",
            margin: "auto",
          }}
        />
        <MenuItem onClick={handleClose}>
          <span className="flex gap-2 text-white/70 text-xs font-bold">
            <h3>Community</h3>
            <MdArrowOutward className="mt-0.5" />
          </span>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <span className="flex gap-2 text-white/70 text-xs font-bold">
            <h3>Documentation</h3>
            <MdArrowOutward className="mt-0.5" />
          </span>
        </MenuItem>

        <MenuItem onClick={handleClose}>
          <span className="flex gap-3 text-xs text-white/70">
            <FaX />
            <FaTelegramPlane />
            <FaGithub />
          </span>
        </MenuItem>
      </Menu>
    </div>
  );
}
