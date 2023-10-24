import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
          <Link to="https://github.com/tarynCodes" target="_blank" className='github'>
      <img src='https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' className='github'/>
      </Link>
    <Link to="https://www.linkedin.com/in/taryncodes/" target="_blank" className='linkedin'>
    <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className='linkedin'/>
    </Link>
    </div>
  )
}

export default Footer