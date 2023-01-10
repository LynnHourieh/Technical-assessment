import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function AddItem() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" className="add_item" onClick={handleShow}>
       Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body> <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>add your item</Form.Label>
        <Form.Control type="text" placeholder="write here" />
     
      </Form.Group>
     <Form.Group>
     <Form.Label>Upload image</Form.Label>
                <Form.Control
                  className="header_form"
                  type="file"
                  placeholder="status"
                  
                  autoFocus
                />
     </Form.Group>
      </Form></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;