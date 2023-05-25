import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddModal = ({ show, handleAddClose, handleAddChange, handleSubmit }) => {
  return (
    <div>
      <>
        <Modal show={show} onHide={handleAddClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input
              className="form-control"
              placeholder="Product name"
              name="title"
              onChange={handleAddChange}
            />
            <input
              className="form-control mt-2"
              placeholder="Product description"
              name="description"
              onChange={handleAddChange}
            />
            <input
              className="form-control mt-2"
              placeholder="Product price"
              name="price"
              onChange={handleAddChange}
            />
            <input
              className="form-control mt-2"
              placeholder="Product image"
              name="thumbnail"
              onChange={handleAddChange}
            />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleAddClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
};

export default AddModal;
