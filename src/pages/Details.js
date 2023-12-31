// import the base code from React library
import React from "react";
import Navigation from "./Navigation";

export default function Details() {
  return (
    <>
      <Navigation />
      {/* creating a table for Employee details */}
      <div className="container">
        <h1>Employee Details</h1>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Employee ID</label>
          <div className="col-md-3 col-xs-1 border border-primary text-right"> 1</div>
          <label className="col-md-3 col-xs-1 bg-primary">Start date</label>
          <div className="col-md-3 col-xs-1 border border-primary"> 21/11/2012</div>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Title</label>
          <div className="col-md-3 col-xs-1 border border-primary"> Mr.</div>
          <label className="col-md-3 col-xs-1 bg-primary">Date of Birth</label>
          <div className="col-md-3 col-xs-1 border border-primary"> 11/01/1990</div>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">First Name</label>
          <div className="col-md-3 col-xs-1 border border-primary">John</div>
          <label className="col-md-3 col-xs-1 bg-primary">Age</label>
          <div className="col-md-3 col-xs-1 border border-primary">
            33 years 0 months 15 days
          </div>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Surname</label>
          <div className="col-md-3 col-xs-1 border border-primary"> Smith</div>
          <label className="col-md-3 col-xs-1 bg-primary">
            National Insuarance Number
          </label>
          <div className="col-md-3 col-xs-1 border border-primary">ST024481B</div>
        </div>
        <div className="row bg-primary">
          <h3>Job Details</h3>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Current Position</label>
          <div className="col-md-3 col-xs-1 border border-primary">
            Front-End Developer
          </div>
          <label className="col-md-3 col-xs-1 bg-primary">Status</label>
          <div className="col-md-3 col-xs-1 border border-primary">Current</div>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Departament</label>
          <div className="col-md-9 border border-primary">IT Depeartament</div>
        </div>
        <div className="row bg-primary">
          <h3>Eqaul Ops Datails</h3>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Gender</label>
          <div className="col-md-9 border border-primary">Male</div>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Nationality</label>
          <div className="col-md-3 col-xs-1 border border-primary"> British</div>
          <label className="col-md-3 col-xs-1 bg-primary">Gender Identity</label>
          <div className="col-md-3 col-xs-1 border border-primary"> </div>
        </div>
        <div className="row">
          <label className="col-md-3 col-xs-1 bg-primary">Ethinic Origin</label>
          <div className="col-md-3 col-xs-1 border border-primary"> British</div>
          <label className="col-md-3 col-xs-1 bg-primary">Maritial</label>
          <div className="col-md-3 col-xs-1 border border-primary">Unknown </div>
        </div>
      </div>
    </>
  );
}
