import React from "react";
import "./index.scss";

const Header = ({title, menuItems}) => {
  const msg = "Hello!";
  return (
    <div className="Header">
      <h1>{title}</h1>
      <ul className="Header-menu">
        {menuItems.map(item => (<li className="Header-menu-item">{item}</li>))}
      </ul>
    </div>
  );
};
export default Header;
