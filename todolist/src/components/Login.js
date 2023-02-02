import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import { useContext } from "react";
import LoginContext from "../Context/LoginContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup"
const schema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(8, "Password must have at least 8 characters").required("Password is required"),
 
});


function Login() {
  const { register, handleSubmit,  formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });
  const { LoginCheck,error } = useContext(LoginContext);
  // const emailRef=useRef();
  // const passwordRef=useRef();

  function onSubmit(data,e){
    e.preventDefault();

    LoginCheck(data.email,data.password)
    // LoginCheck(emailRef.current.value, passwordRef.current.value);
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
            {error ? (<p>{error}</p>):("")}
          </div>
        </div>
        <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
           
            placeholder="email"
            required
            // ref={emailRef}
            {...register('email')}
            className={errors.email ? 'error' : ''}
         
          />
             <p className={errors.email ? 'error-message' : ''}>{errors.email?.message}</p>
          <input
            type="password"
            placeholder="password"
            required
            // ref={passwordRef}
            {...register('password')}
            className={errors.password ? 'error' : ''}
          />
           <p className={errors.password ? 'error-message' : ''}>{errors.password?.message}</p>
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
