import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="#">
        <h2>J|G</h2>
      </a>
      <div class="nav-links">
        <a className={window.location.pathname === "/portfolio"
          ? "nav-link active"
          : "nav-link"} href="#/portfolio">
          Projects
        </a>
        <a className={window.location.pathname === "/jobs"
          ? "nav-link active"
          : "nav-link"} href="#/jobs">
          Experience
        </a>
        <a className={window.location.pathname === "/about"
          ? "nav-link active"
          : "nav-link"} href="#/about">
          About Me
        </a>
      </div>

    </nav>
  );
};

export default Header;
