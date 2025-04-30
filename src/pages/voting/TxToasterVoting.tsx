import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";

function TxToasterVoting({ state, setState }: any) {
  const handleClose = () => {
    setState((prev: any) => ({
      ...prev,
      txComplete: false,
    }));
  };
  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <IoClose fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <>
      {state.txComplete && (
        <Snackbar
          open={state.txComplete}
          autoHideDuration={6000}
          onClose={handleClose}
          message={state.txMessage.message}
          action={action}
          sx={{
            fontSize: "10px",
          }}
        />
      )}
    </>
  );
}

export default TxToasterVoting;
