import React from 'react'
import './style.css'
import Concept from '../../asetts/images/concept.jpg.png'
import { Link } from 'react-router-dom'

function MainVisual() {
  return (
    <div className='main'>
      <Link to='/Concept'>
        <img src={Concept} alt='' />

        <div className='textclass'>
          <h1>私たちの考えるジュエリーとは</h1>
          <h2>Concept</h2>
          <h3>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </h3>
          <h4>
            テキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </h4>
        </div>
      </Link>
    </div>
  )
}
export default MainVisual
