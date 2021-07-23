import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <div className="error">
        <h1 className="error-title">Error</h1>
        <Link to="/" className="btn-error">
          Back to Planets
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
