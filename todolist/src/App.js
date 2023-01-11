import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Pages from "./components/Pages";
import Login from "./components/Login";
import { LoginProvider } from "../src/Context/LoginContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <LoginProvider><Router>
    <Routes>
    <Route exact path='/' element={< Login />}></Route>
    <Route exact path='/tasks' element={< Pages />}></Route>
    </Routes>
   </Router></LoginProvider>
   
  );
}

export default App;

