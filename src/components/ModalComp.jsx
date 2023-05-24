import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComp = ({
  handleClose,
  show,
  handleEditChanges,
  prod,
  handleChange,
}) => {
  console.log(prod);
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className="form-control"
            placeholder="Product name"
            value={prod.title}
            name="title"
            onChange={handleChange}
          />
          <input
            className="form-control mt-2"
            placeholder="Product description"
            value={prod.description}
            name="description"
            onChange={handleChange}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
