import React, { useState } from "react";

/**
 * ForgotPassword Component
 *
 * This component renders a form for users who have forgotten their password.
 * The form takes the user's email and displays a message once the form is submitted.
 * It simulates sending an email to reset the user's password.
 */

export default function ForgotPassword() {
  // State to store the entered email
  const [email, setEmail] = useState("");
  // State to store a confirmation message once the form is submitted
  const [message, setMessage] = useState("");

  /**
   * handleSubmit - handles the form submission.
   *
   * Prevents the default form submission, sets a confirmation message
   * to simulate sending a password reset email.
   * @param {Event} e - the event triggered by form submission
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Email sent to reset your password"); // Sets the confirmation message
  };

  return (
    <div>
      {/* Container for the authentication form */}
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          {/* Display message if it exists, centered and styled */}
          {message && (
            <p className="d-flex justify-content-center text-danger">
              {message}
            </p>
          )}
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Forgotten Password</h3>
            <div className="form-group mt-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Updates email state
                required // Ensures email is required
              />
            </div>

            {/* Button to submit the form */}
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Send Confirmation
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
