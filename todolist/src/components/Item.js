import { useState } from "react";
import Card from "react-bootstrap/Card";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";


function Item({ todo, setTodo }) {

const[nElement,setnElement]=useState(10);
const slice =todo.slice(0,nElement);
const LoadMore=()=>{
  console.log(todo.length)
  setnElement(todo.length)
}

console.log(todo)
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
    <>
    <div className="card_style">
      {slice.length ? (
        <>
          {slice?.map((unit) => {
            return (
              <Card
                style={{ width: "18rem", borderColor: "#f54b9d",margin:"1%" }}
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
      
    </div>
    <Button onClick={LoadMore}>Load more</Button>
    </>
  );
}

export default Item;
