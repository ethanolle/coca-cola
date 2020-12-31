import "./scss/App.scss";
import React, { useState } from "react";
import info from "./const/coca_description.json";
import Zero from "./images/Zero.png";
import Vanilla from "./images/Vanilla.png";
import orangeVanilla from "./images/orangeVanilla.png";
import Cherry from "./images/Cherry.png";

function App() {
  const [transition, setTransition] = useState(false);
  const [bottle, setBottle] = useState(Zero);
  const [backroundcolor, setBackroundcolor] = useState(
    "linear-gradient(64.5deg, #292929 2.1%, #1C1C1C 100.55%)"
  );
  const [infoproduct, setInfoproduct] = useState(0);
  const bottlesList = [Zero, Vanilla, orangeVanilla, Cherry];

  const handleClick = async () => {
    setTransition(true);
    setTimeout(function () {
      if (infoproduct + 2 > info.data.length) {
        setInfoproduct(0);
      } else {
        setInfoproduct(infoproduct + 1);
      }
      setBackroundcolor(info.data[infoproduct]["backround-color"]);
      console.log(infoproduct, backroundcolor);
      setBottle(bottlesList[infoproduct]);
      document.documentElement.style.setProperty(
        "--my-variable-name",
        `${backroundcolor}`
      );
    }, 450);
  };
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
        src={bottle}
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
  );
}

export default App;
