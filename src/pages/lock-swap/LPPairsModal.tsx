import { Box, Button, colors, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";

function LPPairsModal({ open, setOpen, handleOpen, handleClose }: any) {
  const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 430,
    bgcolor: "#2A2B30",
    border: "2px solid #4C5C68",
    borderRadius: "10px",
    color: "#F4F4F5",
    boxShadow: 24,

    p: 4,
  };
  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h4 className="font-extrabold text-lg">Select A Pool</h4>
          <span className=" grid grid-cols-5 gap-2 mt-2">
            <span className="col-span-4 ">
              {/* <FaSearch
                className="absolute mt-3 text-xl font-bold"
                style={{ color: "#B0B3BA" }}
              /> */}
              <input
                type="text"
                className="outline-0 border rounded-md w-full font-light text-sm p-1.5"
                placeholder="Search name or paste address"
              />
            </span>
            <span className="border border-[] rounded-md p-1">hey </span>
          </span>
        </Box>
      </Modal>
    </>
  );
}

export default LPPairsModal;
