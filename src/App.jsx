import './App.css'
import Education from './components/Education/Education'
import Fifthpage from './components/Fifthpage/Fifthpage'
import Firstpage from './components/Firstpage/Firstpage'
import Fourthpage from './components/Fourthpage/Fourthpage'
import Navbar from './components/Navbar/Navbar'
import Secondpage from './components/Secondpage/Secondpage'
import Thirdpage from './components/Thirdpage/Thirdpage'
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    window.scrollTo(0, 50);
  }, []);
  return (
    <>
      <Navbar />  
      <a id="Home"></a>
      <Firstpage />
      <a id="About"></a>
      <Secondpage />
      <a id="Education"></a>
      <Education />
      <a id="Projects"></a>
      <Thirdpage />
      <a id="Skills"></a>
      <Fourthpage />
      <a id="Chat"></a>
      <Fifthpage />
      <footer>
        <p>© 2022 - Developed by Aaditva Vijay Vats </p>
      </footer>
    </>
  )
}

export default App
