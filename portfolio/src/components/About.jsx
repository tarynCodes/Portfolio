import React from 'react'
import { Link } from 'react-router-dom'
import TechSkills from './Tech-skills'

export default function About() {
  return (
    <div>
    <section className='about-section'>
         <h2 className='heading-about'>About me: from Brewer to Coder!</h2>
        <p className='text-about'> I'm a dedicated and creative professional with a unique journey into the world of software development. Originally my career path led me to become a brewer in the beer industry, I am now transiting into starting my journey in tech! 
        I've just completed a 13 week bootcamp with <Link to='https://northcoders.com/our-courses/coding-bootcamp' target="_blank" id="northcoders"> Northcoders</Link> where I've really enjoyed the process of learning coding best practices, creating API's and frontend applications through the medium of JavaScript. I'm continuing to develop my skills after bootcamp life and striving to explore new tech and languages through working on new projects whilst studying using codeAcademy and bootdev </p>
      <h2 id="toolkit">Tool Kit:</h2>
        <TechSkills/>
    </section>
    </div>
  )
}
