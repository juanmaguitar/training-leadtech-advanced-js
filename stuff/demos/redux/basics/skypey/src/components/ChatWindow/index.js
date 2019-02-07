import React from "react";
import store from "../store";
import Header from "../components/Header";

const ChatWindow = ({ activeUserId }) => {
  const {contacts} = store.getState()
  const activeUser = contacts[activeUserId]

  return (
    <div className="ChatWindow">
      <Header user={[activeUser]} />
      </div>
  );
};

export default ChatWindow