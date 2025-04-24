import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FiMenu } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { Link } from "react-router";
function NavigatorMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className=""
      >
        <HiOutlineDotsHorizontal className="text-[23px] text-[#B0B3BA] mt-1" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className="text-xs"
        PaperProps={{
          sx: {
            backgroundColor: "#2A2B30",
            color: "#F4F4F5",
            border: "1px solid #4C5C68",
          },
        }}
      >
        <span className="">
          <MenuItem onClick={handleClose}>
            <Link to={"/dashboard"}>Dashboard</Link>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <Link to={"/lock"}>Lock LP</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/vote"}>Vote</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/"}>Home</Link>
          </MenuItem>
        </span>
      </Menu>
    </div>
  );
}

export default NavigatorMenu;
