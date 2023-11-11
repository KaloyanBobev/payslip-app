import React from "react";

export default function Login() {
  return (
    <div>
      <form>
        <label>Username</label>
        <input type="text" placeholder="example John" required></input>
        <label>Password</label>
        <input type="password" required></input>
        <button>Submit</button>
      </form>
    </div>
  );
}
