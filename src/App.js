import "./scss/App.scss";
import React, { useState, useEffect } from "react";
import info from "./const/coca_description.json";
import { bottlesList } from "./const/cocaData";

function App() {
  const [transition, setTransition] = useState(false);
  const [bottle, setBottle] = useState(bottlesList[0]);
  const [backroundcolor, setBackroundcolor] = useState(
    "linear-gradient(64.5deg, #292929 2.1%, #1C1C1C 100.55%)"
  );
  const [infoproduct, setInfoproduct] = useState(0);

  useEffect(() => {
    setBottle(bottlesList[infoproduct]);
    setBackroundcolor(info.data[infoproduct]["backround-color"]);
  }, [infoproduct]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--my-variable-name",
      `${backroundcolor}`
    );
  }, [backroundcolor]);

  const handleClick = async () => {
    console.log(backroundcolor);
    setTransition(true);
    await setTimeout(function () {
      if (infoproduct + 2 > info.data.length) {
        setInfoproduct(0);
      } else {
        setInfoproduct(infoproduct + 1);
      }
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
