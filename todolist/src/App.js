import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./components/Pages";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
   <Router>
    <Routes>
    <Route exact path='/' element={< Login />}></Route>
    <Route exact path='/tasks' element={< Pages />}></Route>
    </Routes>
   </Router>
  );
}

export default App;
