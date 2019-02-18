import React from 'react'
import Card from '../Card/'

import './index.scss'

const BASE_CLASS = 'Users'
const CLASS_LIST_CARDS = `${BASE_CLASS}-listCards`

const Users = ({users, toggleSelected, selected}) => {
  const usersList = Object.values(users)
  return (
    <div className={BASE_CLASS}>
      <h2>{usersList.length} users</h2>
      <div className={CLASS_LIST_CARDS}>
        {
          usersList
            .map(user => (
              <Card 
                {...user}
                key={user.user_id} 
                toggleSelected={toggleSelected}
                isSelected={ selected.includes(user.user_id) }
              />
            ))
        }
      </div>
    </div>
  )
}

export default Users
