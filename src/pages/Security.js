// Import base code from React library
import React, { useState } from "react";
import Navigation from "./Navigation";

/**
 * Security Component
 *
 * This component renders a form for updating a user's security details,
 * including their password and security question. A confirmation message
 * is displayed after form submission.
 */
export default function Security() {
  // State to store a confirmation message after details are updated
  const [message, setMessage] = useState("");

  /**
   * handleSubmit - Handles the form submission
   *
   * Prevents the default form submission behavior and displays a confirmation
   * message indicating that the security details have been changed.
   * @param {Event} e - the event triggered by form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Details Changed"); // Set confirmation message on successful submission
  };

  // JSX for changing password and security question on the user profile
  return (
    <>
      {/* Navigation component for site-wide navigation */}
      <Navigation />
      <div className="container">
        <h1>Change your security details</h1>

        {/* Form for updating security details */}
        <form className="center-block" onSubmit={handleSubmit}>
          {/* Display a message if there is a confirmation message */}
          {message && (
            <p className="d-flex justify-content-left text-danger">{message}</p>
          )}

          {/* Input for changing the password */}
          <div className="row mb-2">
            <label className="col-md-3">Change Password</label>
            <input
              className="col-md-2 border border-primary"
              type="password" // Changed to 'password' for secure input
              placeholder="Enter new password" // Placeholder for user guidance
            />
          </div>

          {/* Input for changing the security question */}
          <div className="row mb-2">
            <label className="col-md-3">Change Security Question</label>
            <input
              className="col-md-2 border border-primary"
              type="text"
              placeholder="Enter new security question" // Placeholder for user guidance
            />
          </div>

          {/* Submit button to change details */}
          <button type="submit" className="btn btn-primary">
            Change
          </button>
        </form>
      </div>
    </>
  );
}
