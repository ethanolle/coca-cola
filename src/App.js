import "./scss/App.scss";
import React, { useState } from "react";
import info from "./const/coca_description.json";

function App() {
  const [transition, setTransition] = useState(false);

  return (
    <div className='generalContainer'>
      <img alt='cocacola' className='coca-logo  ' />
      <img
        alt='cocacola'
        onAnimationEnd={() => {
          setTransition("right");
        }}
        className={
          transition === true ? "products slide-animation-left " : "products  "
        }
        src='/images/Zero.png'
      />
      <div className='square  '>
        <img alt='next-button' className='next-container' />
        <h2 className='next-button' onClick={() => setTransition(true)}>
          Next
        </h2>
        <div
          className={
            transition === true
              ? "square-content slide-animation-down "
              : "square-content  "
          }
        >
          <h1>{info.data[0].title}</h1>
          <p>
            {info.data[0]["text-line1"]}
            <br /> {info.data[0]["text-line2"]}
            <br /> {info.data[0]["text-line3"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
