import React from "react";
import { Link } from "react-router-dom";


export default function Navbar(props) {
  return (
    <header
      id="header"
      className="fixed-top header-transparent header-scrolled"
    >
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <a href="index.html">School</a>
        </h1>
        <nav id="navbar" className="navbar">
          <ul>
            <li>
              {/* <a className="nav-link scrollto active" href="#hero"></a> */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* <a className="nav-link scrollto" href="#about">About</a> */}
              <Link  to="/about">
                About
              </Link>
            </li>
            <li>
              {/* <a className="nav-link scrollto" href="#team">Team</a> */}
              <Link to="/team">
                Team
              </Link>
            </li>

            <li>
              {/* <a className="nav-link scrollto " href="#portfolio">Portfolio</a> */}
              <Link to="/Courses">
                Courses
              </Link>
            </li>
            <li>
              {/* <a className="nav-link scrollto " href="#portfolio">Portfolio</a> */}
              <Link to="/contact">Contact</Link>
            </li>
            

           
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}
