import React from "react";
import Card from "../Card/";
import { connect } from "react-redux";

import "./index.scss";

const BASE_CLASS = "Users";
const CLASS_LIST_CARDS = `${BASE_CLASS}-listCards`;

const Users = ({ contacts, selected }) => {
  const usersList = Object.values(contacts);

  return (
    <div className={BASE_CLASS}>
      <h2>{usersList.length} users</h2>
      <div className={CLASS_LIST_CARDS}>
        {usersList.map(user => (
          <Card
            {...user}
            key={user.user_id}
            isSelected={selected.includes(user.user_id)}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ contacts, selected }) => ({ contacts, selected });

export default connect(mapStateToProps)(Users);
