import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './componentes/intro/Intro'
import Header from './componentes/Header'
import Hero from './componentes/Hero'
import { DividerClose, DividerOpen } from './componentes/Divider'
import AboutMe from './componentes/AboutMe'
import Landing from './componentes/Landing'
import Trabajos from './componentes/Trabajos'

function App() {
  const [intro, setIntro] = useState(true)

useEffect(() => {
  const timer = setTimeout(() => {
    setIntro(true)
  }, 4000);
  return () => clearTimeout(timer);
}, []);

  return (
    intro?
    <div className="overflow-hidden min-h-screen relative font-poppins">
      <Header items={["sobre mi", "trabajos", "contacto"]} />
      <Hero/>
      <DividerOpen/>
      <AboutMe/>
      <DividerClose/>
      <Landing/>
      <Trabajos/>
    </div>
    :
    <div className="App">
      <Intro/>
    </div>

  )
}

export default App
