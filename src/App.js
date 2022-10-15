import React from 'react'
import './App.css'
import AboutUs from './components/AboutUS/AboutUs'
import Courses from './components/Courses/Courses'
import Navbar from './components/Navbar/Navbar'
import Slider from './components/Slider/Slider'

const App = () => {
  return (
    <div>
      <Navbar />
      <h1 style={{ fontSize: '7rem', textAlign: 'center', fontFamily:'coogose-thin'}}><span style={{ color: '#ffcb05', fontSize: '5rem', fontFamily: 'coogose-bold' }}>Escuela de Programación Código</span> C13</h1>
      <Slider />
      <Courses/>
    </div>
  )
}

export default App