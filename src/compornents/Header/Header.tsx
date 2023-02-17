import React from 'react'
import Mainvisual from '../../asetts/images/mainvisual.png'
import Logo from '../../asetts/images/logo.png'
import './style.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <header>
      <div className='headerlogo'>
        <Link to='/'>
          <img src={Mainvisual} alt='' />
        </Link>
      </div>
      <div className='logo'>
        <img src={Logo} alt='' />
        <nav className='menu'>
          <ul>
            <li className='concept'>
              <Link to='/Concept'>Concept</Link>
            </li>
            <li className='work'>
              <Link to='/work'>Work</Link>
            </li>
            <li className='contact'>
              <Link to='contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
