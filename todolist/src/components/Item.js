import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import lynn from "../Images/lynn.jpg";
function Item() {
  const [todo, setTodo] = useState([
    { id: 1, task: "Eat", isCompleted: true, image: "lynn" },
    { id: 2, task: "Study", isCompleted: false, image: "man" },
    { id: 3, task: "sleep", isCompleted: false, image: "download" },
  ]);
  console.log(todo);
  return (
    <div className="card_style">
      {todo.map((unit) => {
        return (
          <Card
            style={{ width: "18rem", borderColor: "#f54b9d" }}
            key={unit.id}
          >
            <Card.Img
              variant="top"
              src={require("../Images/" + unit.image + ".jpg")}
              className="cards_images"
            />

            <Card.Body>
              <Card.Text>{unit.isCompleted ==true ?(<del style={{color:"#f54b9d"}}>{unit.task}</del>):(<p>{unit.task}</p>)}
              </Card.Text>
              <div className="icons">
                <AiFillEdit />
                <AiFillDelete />{" "}
                <input type="checkbox" className="checkbox_style" />
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default Item;
