import React from 'react'
import '../App.css'
import TechSkills from './Tech-skills'
import { Link } from 'react-router-dom'


function Header() {
  return (
    <div className='border-main'>
    <h3 id= 'intro'>Hello!</h3>
    <h1 id='main-header'> I'm Taryn, </h1>
    <h1 id='job-description'> A Junior Developer based in the UK</h1>
      <TechSkills/>
      <Link to="https://github.com/tarynCodes" target="_blank" className='github'>
      <button className='github'/>
      </Link>
    <Link to="https://www.linkedin.com/in/taryncodes/" target="_blank" className='linkedin'> <button className='linkedin'/></Link>
  </div>
  )
}

export default Header