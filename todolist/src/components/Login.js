import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { useContext } from "react";
import LoginContext from "../Context/LoginContext";


function Login() {
  const { onSubmit } = useContext(LoginContext);
  const emailRef=useRef();
  const passwordRef=useRef();

  function handleSubmit(e){
    e.preventDefault();
    onSubmit(emailRef.current.value,passwordRef.current.value)
  }

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
            ref={emailRef}
         
          />
          <input
            type="password"
            placeholder="password"
            required
            ref={passwordRef}
           
          />
          <button onClick={handleSubmit}>login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
