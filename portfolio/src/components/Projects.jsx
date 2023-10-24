import React from 'react'
import NcNews from './NcNews'
import Api from './Api'

function Projects() {
  return (
    <div >
        <section className='projects-box'>
        <h1>Current Projects</h1>
        <h2>Skills grow, so will this portfolio.</h2>
        </section>
    <section>
        <NcNews/>
        <Api/>
    </section>

    </div>
  )
}

export default Projects