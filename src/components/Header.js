import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <Link to="/" className={window.location.pathname === "/portfolio"
                  ? "navbar-brand"
                  : "navbar-brand"}>
          Jenn Greiner
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/portfolio" className={window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"}>
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className={window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://docs.google.com/document/d/1SVCFP1erPOWJsvWFNJZSif1cs0-UDxfa9yRncFk2A24/edit?usp=sharing"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
