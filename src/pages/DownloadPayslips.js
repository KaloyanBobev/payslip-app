// Importing necessary modules and components from React and React Icons libraries
import React from "react";
import { FaFileDownload } from "react-icons/fa"; // Download icon
import { PiFolderNotchOpenBold } from "react-icons/pi"; // Open file icon
import Navigation from "./Navigation";

/**
 * DownloadPayslips Component
 *
 * This component displays a list of downloadable payslips for a user.
 * It includes navigation, a header with the user's name, and rows
 * showing payslip details for each tax period.
 */
export default function DownloadPayslips() {
  return (
    <>
      {/* Include navigation bar */}
      <Navigation />

      <div className="">
        {/* Header for payslip section */}
        <h1 className="centred">Payslips for John Smith</h1>

        {/* Container for payslip data */}
        <div className="container">
          {/* Header row for payslip columns */}
          <div className="row bg-primary">
            <div className="col-md-2">Tax Year</div>
            <div className="col-md-2">Tax Period</div>
            <div className="col-md-2">Pay Frequency</div>
            <div className="col-md-2">Pay Date</div>
          </div>

          {/* Payslip entry row for tax period 7 */}
          <div className="row border border-primary">
            <div className="col-md-2">2022/2023</div>
            <div className="col-md-2">7</div>
            <div className="col-md-2">Monthly</div>
            <div className="col-md-2">27/10/2023</div>

            {/* Link to view the payslip in a new tab */}
            <div className="col-md-2">
              <a
                href={require("../paslips/paislip7.png")}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PiFolderNotchOpenBold />
              </a>
            </div>

            {/* Link to download the payslip */}
            <div className="col-md-2">
              <a href={require("../paslips/paislip7.png")} download>
                <FaFileDownload />
              </a>
            </div>
          </div>

          {/* Payslip entry row for tax period 6 */}
          <div className="row border border-primary">
            <div className="col-md-2">2022/2023</div>
            <div className="col-md-2">6</div>
            <div className="col-md-2">Monthly</div>
            <div className="col-md-2">29/09/2023</div>
            <div className="col-md-2">
              <a
                href={require("../paslips/paislip6.png")}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PiFolderNotchOpenBold />
              </a>
            </div>
            <div className="col-md-2">
              <a href={require("../paslips/paislip6.png")} download>
                <FaFileDownload />
              </a>
            </div>
          </div>

          {/* Payslip entry row for tax period 5 */}
          <div className="row border border-primary">
            <div className="col-md-2">2022/2023</div>
            <div className="col-md-2">5</div>
            <div className="col-md-2">Monthly</div>
            <div className="col-md-2">25/08/2023</div>
            <div className="col-md-2">
              <a
                href={require("../paslips/paislip5.png")}
                rel="noopener noreferrer"
                target="_blank"
              >
                <PiFolderNotchOpenBold />
              </a>
            </div>
            <div className="col-md-2">
              <a href={require("../paslips/paislip5.png")} download>
                <FaFileDownload />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
