import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h2>404! Page Not Found</h2>
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </>
  );
}

export default PageNotFound;
