import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      class="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div class="container p-2">
        <Link class="navbar-brand" to="/">
          <img
            src="media\images\logo.svg"
            style={{ width: "30%" }}
            alt="logo"
          ></img>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link">
              Support
            </Link>
          </li>
        </ul>
      </div>
      </div>

      {/* <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/signup" className="nav-link">
              Signup
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/product" className="nav-link">
              Product
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/pricing" className="nav-link">
              Pricing
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link">
              Support
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
}

export default Navbar;
