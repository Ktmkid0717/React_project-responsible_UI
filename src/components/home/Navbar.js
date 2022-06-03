import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar-section">
        <div className="navbar-links">
          <h2 className="">PATIENT</h2>
          <ul className="nav-column">
            <div className="dashboard">
              <div className="dashboard-logo"></div>
              <li className="nav-link">
                <NavLink to="/">Dashboard</NavLink>
              </li>
            </div>
            <div className="dashboard">
              <div className="enquires-logo"></div>
              <li className="nav-link">
                <NavLink to="/">Enquires</NavLink>
              </li>
            </div>
            <div className="dashboard">
              <div className="profile-logo"></div>
              <li className="nav-link">
                <NavLink to="/">Profile</NavLink>
              </li>
            </div>
            <div className="dashboard">
              <div className="payment-logo"></div>
              <li className="nav-link">
                <NavLink to="/">Payment</NavLink>
              </li>
            </div>
          </ul>
        </div>
        <div className="help-section">
          <div className="text">Need our help?</div>
          <button className="help-btn">Contact us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
