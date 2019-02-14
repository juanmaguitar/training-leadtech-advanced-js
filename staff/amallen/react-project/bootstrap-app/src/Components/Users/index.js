import React from 'react'
import Card from '../Cards/'

const Users = props => {
    
    const value = Object.values(props.users)
    console.log(value)

    return (
        value.map(({email, name, profile_pic, status, user_id }) => 
            <Card 
                email={email}
                name={name}
                profile_pic={profile_pic} 
                status={status}
                key={user_id}
            />
        )
    )
}

export default Users