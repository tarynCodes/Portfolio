import React from 'react'
import { Link } from 'react-router-dom'
import TechSkills from './Tech-skills'

export default function About() {
  return (
    <div id="about">
    <section className='about-section'>
         <h2 className='heading-about'>About me: from Brewer to Coder!</h2>
        <p className='text-about'> I'm a passionate, creative person with a unique journey into the world of software development. After studying Criminology and Psychology at Uni, I wanted to travel and found a passion for exploring new places. Along the way I found a new passion in Beer! This led me on a journey halfway across the world from Australia (my original home) to the UK! Here I learnt my craft and grafted as brewer for 4 years, enjoying not only brewing but the business side of things and how to use tech to build recipes, make websites and landing pages. Beer will always have a place in my heart, but I'm fully invested in my journey into tech and tech solutions!<br></br><br></br>
        I've completed a 13 week bootcamp with <Link to='https://northcoders.com/our-courses/coding-bootcamp' target="_blank" id="northcoders"> Northcoders</Link> where I really enjoyed the process of learning to code. I was supported in creating API's and frontend applications through the medium of javaScript. I'm continuing to develop my skills after bootcamp life and striving to explore new tech and languages through working on new projects.</p>
      <h2 id="toolkit">ToolKit</h2>
        <TechSkills/>
    </section>
    </div>
  )
}
