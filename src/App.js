import "./scss/App.scss"
import React, { useState } from "react"
import info from "./const/coca_description.json"
function App() {
  const [transition, setTransition] = useState(false)
  const [infoproduct, setInfoproduct] = useState(0)

  const handleClick = () => {
    setTransition(true)
    setTimeout(function () {
      setInfoproduct(infoproduct + 1)
      console.log(infoproduct)
    }, 450)
  }

  return (
    <div className='generalContainer'>
      <img alt='cocacola' className='coca-logo  ' />
      <img
        alt='cocacola'
        onAnimationEnd={() => {
          setTransition("right")
        }}
        className={
          transition === true ? "products slide-animation-left " : "products  "
        }
        src='/images/Zero.png'
      />
      <div className='square  '>
        <img alt='next-button' className='next-container' />
        <h2 className='next-button' onClick={handleClick}>
          Next
        </h2>
        <div
          className={
            transition === true
              ? "square-content slide-animation-down "
              : "square-content  "
          }
        >
          <h1>{info.data[infoproduct].title}</h1>
          <p>
            {info.data[infoproduct]["text-line1"]}
            <br /> {info.data[infoproduct]["text-line2"]}
            <br /> {info.data[infoproduct]["text-line3"]}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
