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
        className="text-white border bg-white"
        variant="primary"
      >
        <HiOutlineDotsHorizontal className="text-[20px]" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className=""
      >
        <span className="border bg-stone-900">
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
