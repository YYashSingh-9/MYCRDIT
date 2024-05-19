import classes from "./NewNoteFormModal.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import { useDispatch } from "react-redux";

const DeleteConfirm = (props) => {
  const modalState = useSelector((state) => state.sliceOne.formModalState);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(sliceOneActions.modalToggler());
  };
  return (
    <>
      <div>
        <Modal
          open={modalState}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.box}></Box>
        </Modal>
      </div>
    </>
  );
};

export default NewNoteFormModal;
