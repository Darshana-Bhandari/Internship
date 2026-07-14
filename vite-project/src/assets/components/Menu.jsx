import React from 'react'
import Profile from './Profile.jsx'
import { useContext } from 'react'
import UserContext from '../context/userContext.jsx'

const Menu = () => {
    const user1 =useContext(UserContext);
  return (
    
    <>
      <Profile />
      <h1>welcome {user1} in menu</h1>
    </>
  )
}

export default Menu
