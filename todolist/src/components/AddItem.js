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
      {/* clicking on the button will open a popup or modal that enable us to add new task */}
      <Button variant="primary" className="additem" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{borderColor:"#fbb107"}}>
          <Modal.Title>
            {" "}
            <font color="#f54b9d">A</font>
            <font color="#fbb107">D</font>
            <font color="#2e489e">D </font>
            <font color="#f54b9d">N</font>
            <font color="#fbb107">E</font>
            <font color="#2e489e">W </font>
            <font color="#f54b9d"> T</font>
            <font color="#fbb107">A</font>
            <font color="#2e489e">S</font>
            <font color="#f54b9d">K</font>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>add your item</Form.Label>
              <Form.Control
              style={{borderColor:"#fbb107"}}
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
                style={{borderColor:"#fbb107"}}
                onChange={onImage}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{borderColor:"#fbb107"}}>
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
