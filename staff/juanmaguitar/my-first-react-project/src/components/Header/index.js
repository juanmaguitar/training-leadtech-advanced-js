import React from "react"
import "./index.css"

const Header = ({ title, menu }) => (
  <div className="Header">
    <h1>{title}</h1>
    <ul className="Header-menu">
      {
        // sdfsdfsdfdsfds
        menu.map(item => (
          <li className="Header-menu-item">{item}</li>
        ))
      }
    </ul>
  </div>
)

export default Header
