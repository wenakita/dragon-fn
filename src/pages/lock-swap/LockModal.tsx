import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function LockModal({ pair }: any) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="">
      <button
        className="text-sm flex w-full justify-center border-1 border border-stone-600 mt-1 bg-stone-900 hover:border-red-500 font-bold p-1.5 rounded-lg"
        onClick={handleClickOpen}
      >
        Lock Tokens
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="text-white"
      >
        <DialogTitle id="alert-dialog-title" className="bg-stone-900 ">
          <div>
            <div className="flex">
              <img src={pair.pair1_logo} alt="" className="size-20" />
              <img src={pair.pair2_logo} alt="" className="size-20" />
            </div>
          </div>
        </DialogTitle>
        <DialogContent className="bg-stone-900 ">
          <div className="text-white"></div>
        </DialogContent>
        <DialogActions className="bg-stone-900">
          <Button onClick={handleClose} autoFocus>
            <span className="text-green-500">Lock Tokens</span>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
