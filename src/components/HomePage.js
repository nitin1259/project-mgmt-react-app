import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Welcome to Project Management React App</h1>
      <p>This is compose of React, React Router, flux and later redux</p>
      {/* <a href="/about">About</a> */}
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
