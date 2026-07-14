import React, { useContext } from 'react'
import UserContext from '../context/userContext'

const Profile = () => {
    const user =useContext(UserContext)
  return (
    <div>
        <h1> welcome {user}</h1>
      
    </div>
  )
}

export default Profile