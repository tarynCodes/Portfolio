import React from 'react'
import '../App.css'
import TechSkills from './Tech-skills'
import Pic from './Pic'



function Header() {
  return (
      <div id="header">
    <section className='border-main'>
    <Pic/>
    <h3 id= 'intro'>Hello!</h3>
    <h1 id='main-header'> I'm Taryn, </h1>
    <h1 id='job-description'> A Junior Software Developer based in the UK. </h1>
    <h2 id='job-description'> I enjoy creating beautiful and responsive fullstack applications.</h2>
    </section>
  </div>
  
  )
}

export default Header