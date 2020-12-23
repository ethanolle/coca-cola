import "./App.css"
import React, { useState } from "react"

function App() {
  const [transition, setTransition] = useState(false)

  return (
    <div className='generalContainer'>
      <img
        src='images/cocalogo.svg'
        alt='cocacola'
        className='coca-logo center-page '
      />
      <img
        alt='cocacola'
        onAnimationEnd={() => {
          setTransition("right")
        }}
        className={
          transition === true ? "products slide-animation " : "products  "
        }
      />
      <div className='square center-page '>
        <img
          src='images/Vector2.png'
          alt='next-button'
          className='next-container'
        />
        <h2 className='next-button' onClick={() => setTransition(true)}>
          Next
        </h2>
        <div className='square-content'>
          <h1>Zero Sugar</h1>
          <p>
            Coca-Cola Zero Sugar
            <br /> Real Coke taste with zero
            <br /> calories. It's possible!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
