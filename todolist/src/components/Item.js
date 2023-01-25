import { useState, useEffect,memo } from "react";
import Card from "react-bootstrap/Card";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function Item({ todo, setTodo }) {
  console.log("Items are rendering")
  //for load more Tasks
  //inital number of elements we want to show is 10
  const [nElement, setnElement] = useState(10);
  //slice variable is an array that contain fist 10 tasks that we have
  const slice = todo.slice(0, nElement);
  //console.log(slice)
  //LoadMore function returns all the tasks that we have by setting mElement variable to the length of inital array(todo)
  const LoadMore = () => {
    // console.log(todo.length)
    setnElement(todo.length);
  };
  // console.log(todo)

  //deleteTask function returns all the tasks excluding the id that we passed as a parameter
  const deleteTask = (id) => {
    let newTask = todo.filter((task) => task.id != id);
    setTodo(newTask);
  };

  //TaskCheck function maps through todo data with an condition(to avoid errors) .
  //if the id of the task matches the id that we passed through the parameter
  //then return all the data with task status (isCompleted) opposite to the current data that we have because it is a boolean .
  //if id is not matching then, return all the tasks
  //set the variable todo with the updated values
  const TaskCheck = (id) => {
    let newTask = todo.map((task) => {
      if (task.id == id) {
        
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    // console.log(newTask)
    setTodo(newTask);
  };

  //checking the token
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  // console.log(token)

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="card_style">
        {/* turnanry operator to return data if slice.length>0 otherwise return NO TASKS YET */}
        {slice.length ? (
          <>
            {/* do mapping for the slice data to show the image, task, status*/}
            {slice?.map((unit) => {
              return (
                // Each map have unique key id
                <Card
                  style={{
                    width: "18rem",
                    borderColor: "#f54b9d",
                    margin: "1%",
                  }}
                  key={unit.id}
                >
                  {/* //require the path of the image */}
                  <Card.Img
                    variant="top"
                    src={require("../Images/" + unit.image)}
                    className="cards_images"
                  />

                  <Card.Body>
                    <Card.Text>
                      {/* styling to differenciate between completed and uncompleted tasks using turnanry operator */}
                      {unit.isCompleted == true ? (
                        <del style={{ color: "#f54b9d" }}>{unit.task}</del>
                      ) : (
                        <p>{unit.task}</p>
                      )}
                    </Card.Text>
                    <div className="icons">
                      {/* delete icon that have callback to deleteTask function */}
                      <AiFillDelete onClick={() => deleteTask(unit.id)} />{" "}
                      {unit.isCompleted == true ? (
                        <input
                          type="checkbox"
                          className="checkbox_style"
                          onClick={() => TaskCheck(unit.id)}
                          checked
                        />
                      ) : (
                        <input
                          type="checkbox"
                          className="checkbox_style"
                          onClick={() => TaskCheck(unit.id)}
                        />
                      )}
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
     {nElement <10 ? (<Button variant="primary" className="load_more" onClick={LoadMore}>
        Load more
      </Button>):(" ")} 
    </>
  );
}

export default memo(Item);
