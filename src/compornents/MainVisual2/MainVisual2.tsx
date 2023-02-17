import React from 'react'
import './style.css'
import Work from '../../asetts/images/work.jpg.png'
import { Link } from 'react-router-dom'
function MainVisual2() {
  return (
    <div className='mainwork'>
      <Link to='/work'>
        <img src={Work} alt='' />
        <div className='textclass2'>
          <h1>ハンドメイドにこだわる理由</h1>
          <h2>Work</h2>
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

export default MainVisual2
