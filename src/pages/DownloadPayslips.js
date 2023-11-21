import React from "react";
// import Navigation from "./Navigation";
export default function DownloadPayslips() {
  return (
    <>{/*
  <Navigation /> */}
    <div className="">
      <h1 className="centred">Payslips for John Smith</h1>
      <div className="container">
        <div className="row bg-primary">
          <div className="col-md-2">Tax Year</div>
          <div className="col-md-2">Tax Period</div>
          <div className="col-md-2">Pay Frequently</div>
          <div className="col-md-2">Pay Date</div>
        </div>
        <div className="row border border-primary">
          <div className="col-md-2">2022/2023</div>
          <div className="col-md-2">7</div>
          <div className="col-md-2">Monthly</div>
          <div className="col-md-2">27/10/2023</div>
          <div className="col-md-2"></div>
        </div>

        <div className="row border border-primary">
          <div className="col-md-2">2022/2023</div>
          <div className="col-md-2">6</div>
          <div className="col-md-2">Monthly</div>
          <div className="col-md-2">29/9/2023</div>
          <div className="col-md-2"></div>
        </div>
      </div>
      </div>
      </>
  );
}
