import { Snackbar } from "@mui/material";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import { SnackbarCloseReason } from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import { IoClose } from "react-icons/io5";

function TxToaster({ txReady, setTxReady, txMessage }: any) {
  const handleClose = () => {
    setTxReady(false);
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
      {txMessage && (
        <Snackbar
          open={txReady}
          autoHideDuration={6000}
          onClose={handleClose}
          message={txMessage.message}
          action={action}
          sx={{
            fontSize: "10px",
          }}
        />
      )}
    </>
  );
}

export default TxToaster;
