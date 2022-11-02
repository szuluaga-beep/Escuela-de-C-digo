import React from 'react'
import './App.css'
import AboutUs from './components/AboutUS/AboutUs'
import Courses from './components/Courses/Courses'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import Slider from './components/Slider/Slider'
import Titulo from './components/Titulo/Titulo'

const App = () => {
  return (
    <div>
      <Navbar />
      <Titulo titulo={`<<EL CRiMEN NO PAGA TANTO COMO EL CODIGO>>`} />
      <Slider />
      <Courses />
      <News/>
    </div>
  )
}

export default App