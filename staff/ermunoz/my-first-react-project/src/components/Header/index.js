import React from "react";
import "./index.css";

const Header = ({ title, menu }) => (
  <div className="Header">
    <h1>{title}</h1>
    <ul className="Header-menu">
      {menu.map((item, index) => (
        <li key={index} className="Header-menu-list">{item}</li>
      ))}
    </ul>
  </div>
);

export default Header;
