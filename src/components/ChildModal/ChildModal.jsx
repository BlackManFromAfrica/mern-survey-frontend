import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import React from "react";
import QuestionAndAnswer from "./questionAndAnswer";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const questionAndAnswers = [<QuestionAndAnswer/>,<QuestionAndAnswer/>,<QuestionAndAnswer/>,<QuestionAndAnswer/>]
export default function ChildModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button onClick={handleOpen} color="primary">
        {props.username}
      </Button>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 400, minheight : 300, borderRadius: 8, maxheight: 700 }}>
          <h2 id="child-modal-title">{props.username}</h2>
          <p id="child-modal-description">
            {questionAndAnswers}
          </p>
          <Button onClick={handleClose}>Close Members</Button>
        </Box>
      </Modal>
    </React.Fragment>
  );
}
