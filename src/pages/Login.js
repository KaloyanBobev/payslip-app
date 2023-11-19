import React from "react";

import { Link } from "react-router-dom";
// import { useState } from "react";

export default function Login() {
  // const [email, setEmail] = useState("Johnsmith@gmail.com");

  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                <Link to="payslip" className="btn btn-lg">
                  Submit
                </Link>
              </button>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="./pages/PageNotFound.js">password?</a>
            </p>
          </div>
        </form>
      </div>
      {/* <form>
        <label>Username</label>
        <input type="text" placeholder="your username" required></input>
        <label>Password</label>
        <input type="password" placeholder="your password" required></input>
        <Link to="payslip" className="btn btn-lg">
          Submit
        </Link>
      </form> */}
    </div>
  );
}
