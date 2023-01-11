import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
function AddItem({ todo, setTodo }) {
  const [newTask, setNewTask] = useState("");
  const [newimage, setNewImage] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const AddTask = () => {
    if (newTask) {
      let number = todo.length + 1;
      let newItem = {
        id: number,
        task: newTask,
        isCompleted: false,
        image: newimage,
      };
      setTodo([...todo, newItem]);
      setNewTask("");
    }
  };
  const onImage = (e) => {
    setNewImage(e.target.files[0]);
  };
  return (
    <>
      <Button variant="primary" className="add_item" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Adding New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>add your item</Form.Label>
              <Form.Control
                type="text"
                placeholder="write here"
                value={newTask}
                onChange={(e) => {
                  setNewTask(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Upload image</Form.Label>
              <Form.Control
                className="header_form"
                type="file"
                placeholder="status"
                autoFocus
                onChange={onImage}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddTask}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddItem;
