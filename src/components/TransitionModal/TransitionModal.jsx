import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "./TransitionModal.module.scss";

const TransitionModal = ({ isOpen, openHandler, children }) => {
  const handleClose = () => {
    openHandler(false);
  };

  return (
    <Modal
      className={styles.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>{children}</Fade>
    </Modal>
  );
};

export default TransitionModal;
