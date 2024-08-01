import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a href="#">
        <h2>Jenn Greiner</h2>
      </a>
      <div class="nav-links"><a class="" href="#/portfolio">Projects</a><a class="" href="#/jobs">Experience</a></div>

    </nav>
  );
};

export default Header;
