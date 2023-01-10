import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./components/Item" 
import AddItem from "./components/AddItem";
import { useState,useEffect } from "react";
import Nav from "react-bootstrap/Nav";
function App() {
  const[item,setItem]=useState("")
  const [todo, setTodo] = useState([
    { id: 1, task: "Eat", isCompleted: true, image: "lynn.jpg" },
    { id: 2, task: "Study", isCompleted: false, image: "man.jpg" },
    { id: 3, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 4, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 5, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 6, task: "sleephjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh", isCompleted: false, image: "download.jpg" },
    { id: 7, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 8, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 9, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 10, task: "sleep", isCompleted: false, image: "download.jpg" },
    { id: 11, task: "sleep", isCompleted: false, image: "download.jpg" },
  ]);
  const filterItem = (curcat) => {
    const unit = todo.filter((newVal) => {
    
      return newVal.isCompleted === curcat;
    });
console.log(unit)
    setItem(unit);
  };

  const allfilter = () => {
    setItem(todo);
  };
  useEffect(() => {
   
    setItem(todo);
  }, []);
  return (
    <>
      <h1>
        <font color="#f54b9d">T</font>
        <font color="#fbb107">O</font>
        <font color="#2e489e"> D</font>
        <font color="#f54b9d">O</font>
        <font color="#fbb107"> L</font>
        <font color="#2e489e">I</font>
        <font color="#f54b9d">S</font>
        <font color="#fbb107">T</font>
        <font color="#2e489e"> A</font>
        <font color="#f54b9d">P</font>
        <font color="#fbb107">P</font>
      </h1>
      <Nav className="justify-content-center">
        <Nav.Link
          onClick={allfilter}
          className="filter_button"
          style={{ color: "#f54b9d" }}
        >
          All
        </Nav.Link>
        <Nav.Link
          onClick={() => filterItem(true)}
          className="filter_button"
          style={{ color: "#fbb107" }}
        >
          Completed
        </Nav.Link>
        <Nav.Link
          onClick={() => filterItem(false)}
          className="filter_button"
          style={{ color: "#2e489e" }}
        >
          Not Completed
        </Nav.Link>
        <Nav.Item></Nav.Item>
      </Nav>
      <AddItem todo={item} setTodo={setTodo}/>
      <Item todo={item} setTodo={setTodo}/>
    </>
  );
}

export default App;
