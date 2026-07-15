// Day 16

/*
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
*/



//Day 17

import React, { useContext } from 'react'
import UserContext from '../context/userContext'


const Profile = () => {
  const age =useContext(UserContext)
  return (
    <>
<h1>MY age is {age}</h1>
      
    </>
  )
}

export default Profile