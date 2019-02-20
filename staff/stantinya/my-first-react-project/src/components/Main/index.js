import React, { Component } from "react";
import "./index.css";

import Counter from "../Counter/";

const Main = ({ users }) => {
  return (
    <div className="Main">
      <h1>Main</h1>
      <Counter />
      <ul>
        {users.map(({ name }, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Main;
