import React from "react";
import { useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Email send to reset your password");
  };
  return (
    <div>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          {message && (
            <p className="d-flex justify-content-center text-danger">
              {message}
            </p>
          )}
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Forgoten Password</h3>
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

            <div className="d-grid gap-2 mt-3">
              {/*submit button with onClick method checking is the entered email and password are match with those in database if is matching rwill redirect to payslip page*/}
              <button type="submit" className="btn btn-primary">
                Send Conformation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
