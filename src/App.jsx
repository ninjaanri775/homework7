import { useState, useEffect } from 'react'
import axios from "axios"


import './App.css'

function App() {

  const [random, setrandom] = useState({})

    const getadvice = async () => {
      const res = await axios.get('https://api.adviceslip.com/advice')
      setrandom(res.data)
    }
  

  return (
    <div className="container">
      <h3 className='id'>Advice #{random?.slip?.id}</h3>
      <div className="holder">
              <h2 className='info'>"{random?.slip?.advice}"</h2>
      </div>

<div className="linecircle">
        <div className="line"></div>
      <div className="oval"></div>
      <div className="oval"></div>
      <div className="line"></div>
</div>


      <button className='button' onClick={getadvice}><img src="/assets/Shape.png" alt="" /></button>
    </div>
  )
}

export default App
