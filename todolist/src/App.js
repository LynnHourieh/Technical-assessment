import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Item from "./components/Item";
import AddItem from "./components/AddItem";
import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Headings from "./components/Headings";
function App() {
  //define an array of objects for static data.
  //todo array contain id,the task, status of the task and an image.
  const [todo, setTodo] = useState([
    { id: 1, task: "Eat Breakfast", isCompleted: false, image: "lynn.jpg" },
    { id: 2, task: "Study Math", isCompleted: false, image: "man.jpg" },
    {
      id: 3,
      task: "sleep  at 9:00 PM",
      isCompleted: false,
      image: "download.jpg",
    },
    { id: 4, task: "Call Friends", isCompleted: false, image: "download.jpg" },
    { id: 5, task: "Make Lunch", isCompleted: false, image: "download.jpg" },
    {
      id: 6,
      task: "Read a book",
      isCompleted: true,
      image: "download.jpg",
    },
    { id: 7, task: "Exam English", isCompleted: false, image: "download.jpg" },
    {
      id: 8,
      task: "Social Media Time",
      isCompleted: false,
      image: "download.jpg",
    },
    { id: 9, task: "Familiy Time", isCompleted: false, image: "download.jpg" },
    { id: 10, task: "Nap time", isCompleted: false, image: "download.jpg" },
    { id: 11, task: "go Pinic", isCompleted: true, image: "download.jpg" },
    { id: 12, task: "go Paris", isCompleted: true, image: "download.jpg" },
    { id: 13, task: "go London", isCompleted: true, image: "download.jpg" },
  ]);

  //define a new variable called items to store the filtered data.
  //initalize item variable to todo variable that contains all the static data
  const [item, setItem] = useState(todo);
  //filterItem arrow function that filter the data accoring to status task if it is completed or not
  const filterItem = (curcat) => {
    const unit = item.filter((newVal) => {
      return newVal.isCompleted === curcat;
    });
    // console.log(unit);
    setItem(unit);
  };
  // allfilter arrow function to have all the data from todo variable
  const allfilter = () => {
    setItem(todo);
  };

  return (
    <>
      {/* import heading component */}
      <Headings />
      {/* filter for all task and uncompleted tasks */}
      <Nav className="justify-content-center">
        <Nav.Link onClick={allfilter} style={{ color: "#f54b9d" }}>
          All
        </Nav.Link>
        <Nav.Link
          onClick={() => filterItem(false)}
          style={{ color: "#2e489e" }}
        >
          Uncompleted
        </Nav.Link>
        <Nav.Item></Nav.Item>
      </Nav>
      {/* Additem component to add new task with props item   */}
      <AddItem item={todo} setTodo={setTodo} />
      {/* Item component to shoe the tasks with props item (the filtered data) and setItem from React hooks */}
      <Item todo={item} setTodo={setItem} />
    </>
  );
}

export default App;
