import React, { useState, useEffect } from "react";
import "./Login.css";
import { useContext } from "react";
import LoginContext from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const { login } = useContext(LoginContext);
  // console.log(login)
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://63be913af5cfc0949b5ae393.mockapi.io/api/login?email=${email}&password=${password}`
      )
      .then((response) => {
        console.log(response.data[0].email)
        if (
          response.data[0].email == email &&
          response.data[0].password == password
        ) {
          navigate("/tasks");
        } else {
          return alert("incorrect email or password")
          
        }
      });
  };
  return (
    <div class="login-page">
      <div class="form">
        <div class="login">
          <div class="login-header">
            <h3>
              {" "}
              <font color="#f54b9d">L</font>
              <font color="#fbb107">O</font>
              <font color="#2e489e">G</font>
              <font color="#f54b9d"> I</font>
              <font color="#fbb107">N</font>
            </h3>
            <p>Please enter your credentials to login.</p>
          </div>
        </div>
        <form class="login-form">
          <input
            type="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => {
              setPass(e.target.value);
            }}
          />
          <button onClick={onSubmit}>login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
