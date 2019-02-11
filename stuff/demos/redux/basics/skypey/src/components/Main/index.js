import React from 'react'
import Empty from '../Empty'
import ChatWindow from '../../containers/ChatWindow'

import './index.css'

const Main = ({ user, activeUserId }) => (
  <main className="Main">
    {activeUserId ? (
      <ChatWindow activeUserId={activeUserId} />
    ) : (
      <Empty user={user} activeUserId={activeUserId} />
    )}
  </main>
)

export default Main
