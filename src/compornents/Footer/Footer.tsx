import React from 'react'
import Logo from '../../asetts/images/logo.png'
import { Link } from 'react-router-dom'
import './style.css'
function Footer() {
  return (
    <div className='footerlogo'>
      <Link to='/home'>
        <img src={Logo} alt='' />
      </Link>
      <p>&copy;2021 Wooden Jeweelry</p>
    </div>
  )
}

export default Footer
