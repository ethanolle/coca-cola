import "./App.css"

function App() {
  return (
    <div className='generalContainer'>
      <img
        src='images/cocalogo.svg'
        alt='cocacola'
        className='coca-logo center-page '
      />
      <img
        src='images/products/Zero.png'
        alt='cocacola'
        className='products center-page '
      />
      <div className='square center-page '>
        <div className='square-content   '>
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
