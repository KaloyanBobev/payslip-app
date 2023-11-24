// import the base code from React library
import React from "react";
import { Link } from "react-router-dom";
//import the image from img folder
import img01 from "../img/004.jpg";
//JXS part prining a message, picture and redirecting link t home page
export default function PageNotFound() {
  return (
    <div className="container page-not row">
      <div className="col-md-3">
        <h1>Page Not Found</h1>
        <p>
          Sorry, tha page you are looking for could not be found or has been
          removed
        </p>
        <Link to="/">Return to login page </Link>
      </div>
      <div className="col-md-4">
        <img src={img01} alt="404 not found disconected cable" />
      </div>
    </div>
  );
}
