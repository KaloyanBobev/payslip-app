// import the base code from React library
import React from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md"; //import two icons from react icons
//import useNavigate,useState,useEfect hooks
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import axios from "axios"; //import axios

export default function Login() {
  //decleare and inicailize a email,password,visible,users varebles
  const [email, setEmail] = useState("john@gmail.com");
  const [password, setPassword] = useState("john1234");
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null); // New state to store the user ID
  const navigate = useNavigate();
  //use hook to do a axios request from local json file

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace with your actual API endpoint or data source
      const response = await axios.get("users.json"); // Assuming users.json contains user data
      const users = response.data;

      const user = users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        // Successfully logged in, redirect to another page
        setError("");
        setUserId(user.id); // Store the user ID
        navigate("/payslip"); // Redirect to the "/payslip" route
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Error fetching user data", error);
      setError("Error during login");
    }
  };

  //return JSX part printing a login form
  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          {error && (
            <p className="d-flex justify-content-center text-danger">{error}</p>
          )}
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
              <span
                className="p-2 d-flex justify-content-center"
                onClick={() => setVisible(!visible)}
              >
                show the password{" "}
                {visible ? <MdVisibility /> : <MdVisibilityOff />}
              </span>
            </div>
            <div className="d-grid gap-2 mt-3">
              {/*submit button with onClick method checking is the entered email and password are match with those in database if is matching rwill redirect to payslip page*/}
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href={"forgot"}>password?</a>
            </p>
          </div>
        </form>

        {userId && <p>User ID: {userId}</p>}
      </div>
    </div>
  );
}
