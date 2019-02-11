import React from 'react'
import _ from 'lodash'
import store from '../../store'
import Header from '../../components/Header'
import Chats from '../../containers/Chat'

import './index.css'

const ChatWindow = ({ activeUserId }) => {
  const { contacts, messages } = store.getState()
  const activeUser = _.values(contacts).find(
    ({ user_id }) => user_id === activeUserId // eslint-disable-line
  )
  const activeMsgs = messages[activeUserId]

  return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMsgs)} />
    </div>
  )
}

export default ChatWindow
