import React from "react";
import Logo from "../Images/logo.svg";
import ArrowDown from "../Images/icon-arrow-down.svg";
import ArrowUp from "../Images/icon-arrow-up.svg";
import Calendar from "../Images/icon-calendar.svg";
import TodoList from "../Images/icon-todo.svg";
import Reminders from "../Images/icon-reminders.svg";
import Planning from "../Images/icon-planning.svg";
import "../Components/Header.css";
import "../responsiveness.css";
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
              <li>
                <img src={TodoList} />
                Todo List
              </li>
              <li>
                <img src={Calendar} />
                Calendar
              </li>
              <li>
                <img src={Reminders} />
                Reminders
              </li>
              <li>
                <img src={Planning} />
                Planning
              </li>
            </ul>
          </li>
          <li>
            Company
            <img src={ArrowDown} />
            <ul>
              <li>History</li>
              <li>Our Team</li>
              <li>Blog</li>
              <li></li>
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
