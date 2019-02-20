import React from "react";
import "./index.css";

// stateless component - using arrow function
const Header = ({ title, menu }) => {
  return (
    <div className="Header">
      <h1>{title}</h1>
      <nav>
        <ul className="Header-menu">
          {menu.map((menuItem, index) => (
            <li key={index} className="Header-menu-item">
              {menuItem}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
