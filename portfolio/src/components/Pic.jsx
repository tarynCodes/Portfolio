import React from 'react'
import myImage from '../assets/self-portrait.png'


function Pic() {
  return (
    <div>
    <img src={myImage} className='self-pic'/>
  </div>
  )
}

export default Pic