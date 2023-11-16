import React from "react";

export default function Security() {
  return (
    <div>
      <form className="center-block">
        <div className="row ">
          <label className="col-md-2">Change Password</label>
          <input className="col-md-2 border border-primary" type="text"></input>
        </div>
        <div className="row">
          <label className="col-md-2">Change Security Question</label>
          <input className="col-md-2 border border-primary" type="text"></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Change
        </button>
      </form>
    </div>
  );
}
