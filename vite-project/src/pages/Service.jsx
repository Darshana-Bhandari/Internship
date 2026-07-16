import React from 'react'
import Navbar from '../components/Navbar'
import {Outlet} from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Navbar />
       
        <h1> hi Home page</h1>
         
      
    </div>
  )
}

export default Home