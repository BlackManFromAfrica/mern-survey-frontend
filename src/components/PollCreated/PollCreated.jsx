import React from "react";
import "./PollCreated.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ChildModal from '../ChildModal/ChildModal'
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxHeight: 600,
    overflowY: 'auto',
    bgcolor: "background.paper",
    borderRadius: 5,
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
    display: 'flex',
    flexDirection : 'column',
};
const PollCreated = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="PollCreated">
        <PeopleOutlineIcon
          style={{ color: "white", cursor: "pointer" }}
          onClick={handleOpen}
        />
        <DeleteOutlineIcon color="warning" style={{ cursor: "pointer" }} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <h2 id="parent-modal-title" style={{color: 'blue'}}>Members</h2>
          <ChildModal username = 'vasya' />
          <ChildModal username = 'vasya' />
          <ChildModal username = 'vasya' />
          <ChildModal username = 'vasya' />
        </Box>
      </Modal>
    </>
  );
};

export default PollCreated;
