import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Skills from './Components/Skills/Skills'
import About from './Components/About/About'
import Work from './Components/Work/Work'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
