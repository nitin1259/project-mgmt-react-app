import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeClass = {
    color: "orange",
  };
  return (
    <nav>
      <NavLink activeStyle={activeClass} exact to="/">
        Home
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeClass} to="/courses">
        Courses
      </NavLink>
      {" | "}
      <NavLink activeStyle={activeClass} to="/about">
        About
      </NavLink>
    </nav>
  );
}

export default Header;
