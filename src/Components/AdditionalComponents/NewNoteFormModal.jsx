import classes from "./NewNoteFormModal.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import { sliceOneActions } from "../../Store/sliceOne";
import { useDispatch } from "react-redux";

const NewNoteFormModal = (props) => {
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
          <Box className={classes.box}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
};

export default NewNoteFormModal;
