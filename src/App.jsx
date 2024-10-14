import './App.css'
import About from './components/About/About'
import Education from './components/Education/Education'
import Home from './components/Home/Home'
import Loadingpage from './components/Loadingpage/Loadingpage'
import { useEffect } from 'react'
import { useState } from 'react'
import Technicalskills from './components/Technicalskills/Technicalskills'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'
import Background from './components/Background/Background'
import Navbar from './components/Navbar/Navbar'
import Contact from './components/Contact/Contact'

function App() {
  const [Loading , setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 11000)
  }, [])
  return (
    <>
      {Loading && < Loadingpage />}
      {!Loading && <Background />}
      {!Loading && <Navbar />}
      <a id = "Home"></a>
      {!Loading && <Home />}
      <a id = "About"></a>
      {!Loading && <About />}
      <a id = "Education"></a>
      {!Loading && <Education />}
      <a id = "Skills"></a>
      {!Loading && <Technicalskills />}
      <a id = "Projects"></a>
      {!Loading && <Projects />}
      <a id = "Connect"></a>
      {!Loading && <Contact />}
      {!Loading && < Footer />}
    </>
  )
}

export default App
