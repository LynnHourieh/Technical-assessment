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


// const onSubmit = (e) => {
//   e.preventDefault();

//   axios
//     .post(
//       `https://63be913af5cfc0949b5ae393.mockapi.io/api/login?email=${email}&password=${password}`,
//       {
//         method: "POST",
//         headers: { "Content-Type": "multipart/form-data" },
//       }
//     )
//     .then((res) => {
//       console.log(res.data.email)
//       if (res.email == email && res.password == password) {
//         return alert("correct");
//       } else {
//         return alert("incorrect");
//       }
//     });
// };


// const onSubmit = (e) => {
//   e.preventDefault();
//   fetch(
//     `https://63be913af5cfc0949b5ae393.mockapi.io/api/login?email=${email}&password=${password}`,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   )
//     .then((response) => {
//       if (response.ok) {
//         console.log(response.data);
//         if(response.email==email && response.password==password){
//           return alert("correct")
//         }
//         else{return alert("incorrect")}
//       }
//       // throw response;
//     })