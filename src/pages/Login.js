import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" placeholder="your username" required></input>
        <label>Password</label>
        <input type="password" placeholder="your password" required></input>
        <Link to="payslip" className="btn btn-lg">
          Submit
        </Link>
      </form>
    </div>
  );
}
