import { Box, Modal, Typography } from "@mui/material";
import { MdError } from "react-icons/md";

import { FaCheckCircle } from "react-icons/fa";
function TXPopup({ txComplete, ready, setReady }: any) {
  const handleClose = () => {
    setReady(false);
  };
  return (
    <Modal
      open={ready}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "#171717",
          p: 4,
          borderRadius: 2,
          borderColor: "#171717",
        }}
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          className="text-white flex justify-between"
        >
          <h3>Lock LP Tokens</h3>
          <button className="font-extrabold me-2" onClick={handleClose}>
            X
          </button>
        </Typography>
        <Typography
          id="modal-modal-description"
          sx={{ mt: 2 }}
          className="text-white p-5"
        >
          {txComplete.complete ? (
            <FaCheckCircle className="" />
          ) : (
            // <AiOutlineLoading3Quarters
            //   color="393646"
            //   className="animate-spin size-12 ms-auto me-auto  font-extrabold"
            // />
            <MdError className="size-10 m-auto text-red-500" />
          )}
          <h3 className="mt-5  text-center text-xs text-white">
            {txComplete.message || "Locking you tokens..."}
          </h3>
        </Typography>
      </Box>
    </Modal>
  );
}

export default TXPopup;
