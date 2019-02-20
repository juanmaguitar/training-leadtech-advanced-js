import React from 'react'
import { connect } from "react-redux"

import Card from '../Card/'
import './index.scss'

const BASE_CLASS = 'Users'
const CLASS_LIST_CARDS = `${BASE_CLASS}-listCards`

const Users = ({users, selected}) => {
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
                isSelected={ selected.includes(user.user_id) }
              />
            ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = ({ contacts: users, selected }) => ({ users, selected })

export default connect(mapStateToProps)(Users)

// export default Users