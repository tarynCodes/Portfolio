import React from 'react'
import '../App.css'
import TechSkills from './Tech-skills'

function Header() {
  return (
    
    <div className='border-main'>
    <h3 id= 'intro'>Hello!</h3>
    <h1 id='main-header'> I'm Taryn, </h1>
    <h1 id='job-description'> A Junior Developer based in the UK</h1>
      <TechSkills/>
  </div>
  )
}

export default Header