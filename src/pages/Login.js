import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" placeholder="example John" required></input>
        <label>Password</label>
        <input type="password" required></input>
        <Link to="payslip">Submit</Link>
      </form>
    </div>
  );
}
