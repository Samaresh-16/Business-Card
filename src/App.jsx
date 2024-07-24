import { useState } from 'react'
import Footer from './footer.jsx'
import About from './about.jsx'
import dp from './assets/IMG_20230129_225825.jpg'
import linkedin from './assets/Vector.png'
import mail from './assets/icons8-gmail-logo-50 (1).png'
import './App.css'



function App() {
  const [count, setCount] = useState(0)
  
  function openMail(){
    // alert('Button clicked!')
    window.location = "mailto:samareshmaiti02@gmail.com"
  }

  function openLI(){
    window.open('https://www.linkedin.com/in/samaresh-maiti-014199210','_blank').focus()
  }

  return (
    <div className='container'>
      <div className='content'>
        <section className='image-ctr'>
          <img src={dp} alt="Display picture" height="317px" width="317px"/>
        </section>
        <section className='primary-info'>
          <h1>Samaresh Maiti</h1>
          <p>Software Developer</p>
        </section>
        <div className='btns'>
          <button className='mail' onClick={openMail}><img src={mail} alt="mail" width="16px" height="16px" /> Email</button>
          <button className='linkedin'onClick={openLI}><img src={linkedin} alt="linkedin" width="16px" height="16px"/> LinkedIn</button>
        </div>
        <About />
      </div>
      
      <Footer /> 
    </div>
  )
}

export default App
