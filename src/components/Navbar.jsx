import React from "react";
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="nav">
      <ul>
        <li className="item">
          <a>Profile</a>
        </li>
        <li  className="item">
          <a>Messages</a>
        </li>
        <li className="item">
          <a>News</a>
        </li>
        <li className="item">
          <a>Music</a>
        </li>
        <li className="item">
          <a>Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
