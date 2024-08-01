import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="#">
        <h1>Jenn Greiner</h1>
      </a>
      <div class="nav-links"><a class="" href="#/portfolio">Projects</a><a class="" href="#/jobs">Experience</a></div>

    </nav>
  );
};

export default Header;
