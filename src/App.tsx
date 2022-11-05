import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [beerName, setBeerName] = useState('');

  const generateBeerName = () => {
    const beerName = "Hello, beer!";
    setBeerName(beerName);
    console.log(`New beer name: ${beerName}`)
  }

  return (
    <div className="App">
      Malty National Beer Name Generator
      <div className='beerNameDisplay'>
        {beerName}
      </div>
      <br>
      </br>
      <button onClick={() => generateBeerName()}>Generate!</button>
    </div>
  )
}

export default App
