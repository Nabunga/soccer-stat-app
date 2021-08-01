import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <header className="header">
      <div>
        <h1 className="header__header">Soccer stat</h1>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <Link to="/">
            <li className="nav__link">List of leagues</li>
          </Link>
          <Link to="/teams">
            <li className="nav__link">List of teams</li>
          </Link>
          <Link to="/league-calendar">
            <li className="nav__link">Calendar of league</li>
          </Link>
          <Link to="/team-calendar">
            <li className="nav__link">Calendar of team</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
