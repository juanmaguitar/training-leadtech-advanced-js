import React from "react"
import store from "../../store";
import { setActiveUserId } from "../../actions"
import "./index.css"

const User = ({ user }) => {
  const { name, profile_pic, status } = user
  
  const handleUserClick = () => {
    const { user_id } = user
    store.dispatch(setActiveUserId(user_id));
  }
  
  return (
    <div className="User" onClick={handleUserClick}>
    <img src={profile_pic} alt={name} className="User__pic" />
    <div className="User__details">
    <p className="User__details-name">{name}</p>
    <p className="User__details-status">{status}</p>
    </div>
    </div>
  )
}
  
export default User
