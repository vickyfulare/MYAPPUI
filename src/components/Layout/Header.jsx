import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../Images/fb1.png";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header style={{ backgroundColor: "#e3f2fd" }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow">
        <div className="container-fluid">
          {/* Logo */}
          <NavLink className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Logo"
              width="70"
              height="60"
              className="d-inline-block align-text-top"
            />
          </NavLink>

          {/* Navbar toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-controls="navbarNav"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <span>&#10006;</span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          {/* Navbar links */}
          <div
            className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link me-3 ${isActive ? "active-link" : ""}`
                  }
                  to="/"
                >
                  <b>Home</b>
                </NavLink>
              </li>

              {/* About Dropdown */}
              <li className="nav-item dropdown bg-light">
                <NavLink
                  className="nav-link dropdown-toggle me-3"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/about"
                >
                  <b> About </b>
                </NavLink>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="aboutDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/about"
                    >
                      <b> About Us </b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/about/trustees"
                    >
                      <b> Trustees </b>
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Programs Dropdown */}
              <li className="nav-item dropdown bg-light">
                <NavLink
                  className="nav-link dropdown-toggle me-3"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/programs"
                >
                  <b>Programs</b>
                </NavLink>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="programsDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/programs"
                    >
                      <b>Programs </b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/programs/past"
                    >
                      <b> Past Programs </b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/programs/upcoming"
                    >
                      <b> Upcoming Programs </b>
                    </NavLink>
                  </li>
                </ul>
              </li>

              {/* Programs Dropdown */}
              <li className="nav-item dropdown bg-light">
                <NavLink
                  className="nav-link dropdown-toggle me-3"
                  id="programsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/gallary"
                >
                  <b>Gallery</b>
                </NavLink>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="programsDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/gallary"
                    >
                      <b>Photos </b>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/videos"
                    >
                      <b>Videos </b>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    `nav-link me-3 ${isActive ? "active-link" : ""}`
                  }
                  to="/contact"
                >
                  <b>Contact Us</b>
                </NavLink>
              </li>
              {/* About Dropdown */}
              {/* <li className="nav-item dropdown bg-light">
                <NavLink
                  className="nav-link dropdown-toggle me-3"
                  id="aboutDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="/about"
                >
                  <b> Dashboard </b>
                </NavLink>
                <ul
                  className="dropdown-menu bg-light"
                  aria-labelledby="aboutDropdown"
                >
                  <li>
                    <NavLink
                      className="dropdown-item bg-light text-info fw-bold"
                      to="/login"
                    >
                      <b> Admin Dashboard </b>
                    </NavLink>
                  </li>
                </ul>
              </li> */}

              {/* <li className="nav-item">
                <button
                  className="learn-btn learn-more-button"
                  onClick={() => navigate("/donate")}
                >
                  <b>Donate</b>
                </button>
              </li> */}
              <li className="nav-item">
                <button
                  className="learn-btn learn-more-button"
                  onClick={() => navigate("/donate")}
                >
                  <b>Donate</b>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
