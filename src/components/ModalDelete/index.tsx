import React from 'react';
import { Modal } from 'rsuite';
import { Button } from '@UiKitComponents';
import './ModalDelete.scss';

interface ModalDeleteProps {
  title: string;
  body: string;
  name: string;
  open: boolean;
  setOpen: (openState: boolean) => void;
  onDelete: () => void;
}

const ModalDelete: React.FC<ModalDeleteProps> = (props) => {
  const { open, title, body, name, setOpen, onDelete } = props;
  const handleClose = () => setOpen(!open);
  return (
    <Modal open={open} onClose={handleClose} dialogClassName="modal_delete">
      <Modal.Header closeButton={false}>
        <h6>Delete {title}</h6>
      </Modal.Header>
      <Modal.Body>
        <p>
          Do you really want to delete {body} <span>{name}</span>?
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onDelete}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalDelete;
