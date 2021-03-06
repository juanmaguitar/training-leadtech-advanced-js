import React from 'react'
import User from '../../containers/User'
import './index.css'

const Sidebar = ({ contacts }) => {
  console.log(contacts)
  return (
    <aside className="Sidebar">
      {contacts.map(contact => (
        <User user={contact} key={contact.user_id} />
      ))}
    </aside>
  )
}

export default Sidebar
