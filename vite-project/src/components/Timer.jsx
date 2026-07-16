import React, { useEffect, useState } from 'react'

const Timer = () => {
    const[seconds,setSeconds]=useState(0)
    // mounting + updating + unmounting
    useEffect(()=>{
        const timer =setInterval(()=>{
            setSeconds((prev)=>prev+1)
        },1000)
        return()=>{
            clearInterval(timer)
            console.log(" component unMounted")
        }
    },[])
  return (
    <>
      <h2>Timer: {seconds}Seconds</h2>
    </>
  )
}

export default Timer