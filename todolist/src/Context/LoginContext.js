import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const navigate = useNavigate();
  const[error,setError]=useState("")

  const LoginCheck = (email, password) => {
    axios
      .get(
        `https://63be913af5cfc0949b5ae393.mockapi.io/api/login?email=${email}&password=${password}`
      )
      .then((response) => {
        // console.log(response.data[0].email)
        if (
          response.data[0].email == email &&
          response.data[0].password == password
        ) {
          localStorage.setItem("token", response.data[0].token);
        
          navigate("/tasks");
        } else {
          return setError("incorrect email or password");
        }
      });
  };
  
  return (
    <LoginContext.Provider value={{ LoginCheck,error }}>
      {children}
    </LoginContext.Provider>
  );
};
export default LoginContext;
