import React, { useEffect } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const email1 = "user1@abv.bg";
const password1 = "pass1";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/db/users.json")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            #{user.id}: {user.first_name} {user.last_name}
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
              <span className="p-2" onClick={() => setVisible(!visible)}>
                show the password{" "}
                {visible ? <MdVisibility /> : <MdVisibilityOff />}
              </span>
            </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => {
                  if (email === email1 && password === password1) {
                    navigate("/payslip");
                  } else {
                    <div>Wrong email or password</div>;
                  }
                }}
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
