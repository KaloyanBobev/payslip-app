// import the base code from React library
import React, { useState } from "react";

import Navigation from "./Navigation";

export default function Security() {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Details Changed");
  };

  //JSX for changing a password and security question on the user profile
  return (
    <>
      <Navigation />
      <div className="container">
        <h1>Change your security details</h1>

        <form className="center-block" onSubmit={handleSubmit}>
          {message && (
            <p className="d-flex justify-content-left text-danger">{message}</p>
          )}
          <div className="row mb-2">
            <label className="col-md-2">Change Password</label>
            <input
              className="col-md-2 border border-primary"
              type="text"
            ></input>
          </div>
          <div className="row mb-2">
            <label className="col-md-2">Change Security Question</label>
            <input
              className="col-md-2 border border-primary"
              type="text"
            ></input>
          </div>
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn btn-primary"
          >
            Change
          </button>
        </form>
      </div>
    </>
  );
}
