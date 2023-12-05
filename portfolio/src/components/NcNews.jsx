import React from 'react'
import { Link } from 'react-router-dom';
import ncNewsImage from '../assets/nc-news.png'

function NcNews() {
  return (
    <div id="ncnews">
      <section id="news-description">
      <h3>NC-News</h3>
      <h5>My Northcoders news website  built using React, JavaScript, CSS, rest API's, Axios</h5>
      <h6>Built using React, JavaScript, CSS, rest API's, Axios</h6>
      <Link id="live-ncnews"to='https://taryn-nc-news.netlify.app/' target="_blank">Live</Link>
      <Link id="github-ncnews"to='https://github.com/tarynCodes/nc-news' target="_blank">Github</Link>
      </section>
      <img src={ncNewsImage} id='newsImage'></img>
     
    </div>
  )
}

export default NcNews;