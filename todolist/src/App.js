import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Item from "./components/Item" 
import AddItem from "./components/AddItem";
function App() {
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
      <AddItem/>
      <Item/>
    </>
  );
}

export default App;
