import React from 'react';
import Modal from 'react-modal';
import styles from './ConfirmationModal.module.css';

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal className={styles.modal} isOpen={isOpen} onRequestClose={onClose}>
      <h2 className={styles.question}>Are you sure you want to delete this contact?</h2>
      <button className={styles.btn} onClick={onClose}>Cancel</button>
      <button className={styles.btn} onClick={onConfirm}>Delete</button>
    </Modal>
  );
};

export default ConfirmationModal;