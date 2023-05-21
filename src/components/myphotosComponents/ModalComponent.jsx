import { Box, Button, Input, Modal, Typography } from "@mui/material";

const ModalComponent = ({ open, closeModal, setDescription, description, editDesc}) => {
  return (
    <Modal open={open} onClose={() => closeModal()}>
          <Box sx={{ display: open ? modal : "none" }}>
            <Typography sx={{ mt: 2, ml: 2 }} variant="h6" component="h2">
              Edit Description
            </Typography>
            <Input
              sx={{ mt: 2, mb: 4, ml: 2 }}
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            ></Input>
            <Button
              onClick={() => {
                closeModal();
                editDesc();
              }}
            >
              Edit
            </Button>
          </Box>
        </Modal>
  )
}

export default ModalComponent

const modal = {
  width: "20%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "5px",
};