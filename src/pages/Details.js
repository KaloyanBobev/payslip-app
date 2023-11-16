import React from "react";

export default function Details() {
  return (
    <div className="container center-block">
      <h1>Employee Details</h1>
      <div className="row">
        <label className="col-md-3 bg-primary">Employee ID</label>
        <div className="col-md-3 border border-primary text-right"> 188765</div>
        <label className="col-md-3 bg-primary">Start date</label>
        <div className="col-md-3 border border-primary"> 21/11/2012</div>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Title</label>
        <div className="col-md-3 border border-primary"> Mr.</div>
        <label className="col-md-3 bg-primary">Date of Birth</label>
        <div className="col-md-3 border border-primary"> 11/01/1990</div>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">First Name</label>
        <div className="col-md-3 border border-primary">John</div>
        <label className="col-md-3 bg-primary">Age</label>
        <div className="col-md-3 border border-primary">
          {" "}
          33 years 0 months 15 days
        </div>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Surname</label>
        <div className="col-md-3 border border-primary"> Smith</div>
        <label className="col-md-3 bg-primary">
          National Insuarance Number
        </label>
        <div className="col-md-3 border border-primary">ST024481B</div>
      </div>
      <div className="row bg-primary">
        <h4>Job Details</h4>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Current Position</label>
        <div className="col-md-3 border border-primary">
          Front-End Developer
        </div>
        <label className="col-md-3 bg-primary">Status</label>
        <div className="col-md-3 border border-primary">Current</div>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Departament</label>
        <div className="col-md-9 border border-primary">IT Depeartament</div>
      </div>
      <div className="row bg-primary">
        <h4>Eqaul Ops Datails</h4>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Gender</label>
        <div className="col-md-9 border border-primary">Male</div>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Nationality</label>
        <div className="col-md-3 border border-primary"> British</div>
        <label className="col-md-3 bg-primary">Gender Identity</label>
        <div className="col-md-3 border border-primary"> </div>
      </div>
      <div className="row">
        <label className="col-md-3 bg-primary">Ethinic Origin</label>
        <div className="col-md-3 border border-primary"> British</div>
        <label className="col-md-3 bg-primary">Maritial</label>
        <div className="col-md-3 border border-primary">Unknown </div>
      </div>
    </div>
  );
}
