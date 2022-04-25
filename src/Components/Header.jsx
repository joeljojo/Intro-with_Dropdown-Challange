import React from "react";
import Logo from "../Images/logo.svg";
import ArrowDown from "../Images/icon-arrow-down.svg";
import ArrowUp from "../Images/icon-arrow-up.svg";
import "../Components/Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="snap" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            Features
            <img src={ArrowDown} />
            <ul>
              <li>Todo List</li>
              <li>Calendar</li>
              <li>Reminders</li>
              <li>Planning</li>
            </ul>
          </li>
          <li>
            Company
            <img src={ArrowDown} />
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
            </ul>
          </li>
          <li>Careers</li>
          <li>About</li>
        </ul>
      </div>

      <div className="btns">
        <div className="btn">Login</div>
        <div className="btn" id="register">
          Register
        </div>
      </div>
    </div>
  );
};

export default Header;
