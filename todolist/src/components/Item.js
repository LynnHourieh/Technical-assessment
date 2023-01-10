import { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Item({ todo, setTodo }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const deleteTask = (id) => {
    let newTask = todo.filter((task) => task.id != id);
    setTodo(newTask);
  };
  const TaskCheck = (id) => {
    let newTask = todo.map((task) => {
      if (task.id == id) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTodo(newTask);
  };

  return (
    <div className="card_style">
      {todo.length ? (
        <>
          {todo?.map((unit) => {
            return (
              <Card
                style={{ width: "18rem", borderColor: "#f54b9d",margin:"5px" }}
                key={unit.id}
              >
                <Card.Img
                  variant="top"
                  src={require("../Images/" + unit.image)}
                  className="cards_images"
                />

                <Card.Body>
                  <Card.Text>
                    {unit.isCompleted == true ? (
                      <del style={{ color: "#f54b9d" }}>{unit.task}</del>
                    ) : (
                      <p>{unit.task}</p>
                    )}
                  </Card.Text>
                  <div className="icons">
                    <AiFillEdit onClick={handleShow}/>
                    <AiFillDelete onClick={() => deleteTask(unit.id)} />{" "}
                    <input
                      type="checkbox"
                      className="checkbox_style"
                      onClick={() => TaskCheck(unit.id)}
                    />
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </>
      ) : (
        <h2>
          <font color="#f54b9d">N</font>
          <font color="#fbb107">O</font>
          <font color="#2e489e"> T</font>
          <font color="#f54b9d">A</font>
          <font color="#fbb107">S</font>
          <font color="#2e489e">K</font>
          <font color="#f54b9d">S</font>
          <br></br>
          Click Add item button to add new task
        </h2>
      )}
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
                
              />
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Item;
