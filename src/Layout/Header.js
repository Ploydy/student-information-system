import React from "react";
import { Link } from "react-router-dom";


export default function Header(props) {
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
            <li className="dropdown">
              <Link to="#">
                <span>Drop Down</span> <i className="bi bi-chevron-down" />
              </Link>
              <ul>
                <li>
                  <Link to="#">Drop Down 1</Link>
                </li>
                <li className="dropdown">
                  <Link to="#">
                    <span>Deep Drop Down</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </Link>
                  <ul>
                    <li>
                      <Link to="#">Deep Drop Down 1</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 2</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 3</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 4</Link>
                    </li>
                    <li>
                      <Link to="#">Deep Drop Down 5</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="#">Drop Down 2</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 3</Link>
                </li>
                <li>
                  <Link to="#">Drop Down 4</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/register">Register</Link>
            </li>

            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle" />
        </nav>
      </div>
    </header>
  );
}
