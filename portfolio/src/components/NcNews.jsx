import React from 'react'
import { Link } from 'react-router-dom';
import ncNewsImage from '../assets/nc-news.png'

function NcNews() {
  return (
    <div id="ncnews">
      <h3>NC-News</h3>
      <h5>My Northcoders news website - built using React, JavaScript, CSS, rest API's</h5>
      <img src={ncNewsImage} id='newsImage'></img>
      <section id='links-ncnews'>
      <Link id="live-ncnews"to='https://taryn-nc-news.netlify.app/'>Live</Link>
      <Link id="github-ncnews"to='https://github.com/tarynCodes/nc-news'>Github</Link>
      </section>
    </div>
  )
}

export default NcNews;