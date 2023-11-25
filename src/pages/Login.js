// import the base code from React library
import React from "react";
//import two icons from react icons
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
//import useNavigate,useState,useEfect hooks
//import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
//import axios
import axios from "axios";

export default function Login() {
  //decleare and inicailize a email,password,visible,users varebles
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  //const navigate = useNavigate();
  //use hook to do a axios request from local json file
  useEffect(() => {
    axios
      .get("users.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  const compareCreditinales = () => {
    if (email === users.email && password === users.password) {
      console.log("match!");
      // navigate("/payslip");
    } else {
      console.log("do not match!");
    }
  };

  //return JSX part printing a login form
  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            #{user.id}: {user.first_name} {user.second_name}
          </li>
        ))}
      </ul>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3 flex ">
              <label>Password</label>
              <input
                type={visible ? "text" : "password"}
                className="form-control mt-1"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/*create a icon fro viasibility of the password with onClick method */}
              <span className="p-2" onClick={() => setVisible(!visible)}>
                show the password{" "}
                {visible ? <MdVisibility /> : <MdVisibilityOff />}
              </span>
            </div>
            <div className="d-grid gap-2 mt-3">
              {/*submit button with onClick method checking is the entered email and password are match with those in database if is matching rwill redirect to payslip page*/}
              <button
                type="submit"
                className="btn btn-primary"
                onClick={compareCreditinales()}
              >
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="./pages/PageNotFound.js">password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
