// Importing main stylesheet
import "./App.scss";

// Importing necessary components from React Router for routing
import { Routes, Route } from "react-router-dom";

// Importing pages for different routes in the application
import Login from "./pages/Login";
import CalendarElement from "./pages/Calendar";
import Payslip from "./pages/Payslip";
import DownloadPayslips from "./pages/DownloadPayslips";
import Details from "./pages/Details";
import Security from "./pages/Security";
import Forgot from "./pages/ForgotPassword";
import NotFound from "./pages/PageNotFound";

/**
 * App Component
 *
 * This is the main application component that sets up the routes for different pages.
 * It uses React Router to define routes and render the appropriate component based
 * on the current URL path.
 *
 * Routes:
 * - "/"              - Login page
 * - "/payslip/:userId" - Payslip page for a specific user
 * - "/calendar"      - Calendar page
 * - "/download"      - Page for downloading payslips
 * - "/details"       - User details page
 * - "/security"      - Security settings page
 * - "/forgot"        - Forgot password page
 * - "*"              - Wildcard route for handling 404 errors (Page Not Found)
 */

function App() {
  return (
    <div>
      {/* Define routes for the application */}
      <Routes>
        {/* Route for login page */}
        <Route path="/" element={<Login />} />

        {/* Route for user-specific payslip page; expects a userId parameter */}
        <Route path="payslip/:userId" element={<Payslip />} />

        {/* Route for calendar page */}
        <Route path="calendar" element={<CalendarElement />} />

        {/* Route for downloading payslips */}
        <Route path="download" element={<DownloadPayslips />} />

        {/* Route for viewing user details */}
        <Route path="details" element={<Details />} />

        {/* Route for changing security settings */}
        <Route path="security" element={<Security />} />

        {/* Route for forgot password page */}
        <Route path="forgot" element={<Forgot />} />

        {/* Catch-all route for handling 404 Not Found errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
