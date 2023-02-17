import React from 'react'

import './App.css'
import Header from './compornents/Header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainVisual from './compornents/Mainvisual/MainVisual'
import MainVisual2 from './compornents/MainVisual2/MainVisual2'
import Footer from './compornents/Footer/Footer'
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <MainVisual />
        <MainVisual2 />
        <Footer />
      </div>
    </Router>
  )
}

export default App
