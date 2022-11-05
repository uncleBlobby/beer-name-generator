import { useState } from 'react'
import words from 'categorized-words'
import logo from './logo.png';
import './App.css'

const nouns = words.N;
const adjectives = words.A;
const verbs = words.V;

const pronouns = words.P;

const interjections = words.I;

function App() {

  const [beerName, setBeerName] = useState('');

  const generateBeerName = () => {
    const beerName = getRandomAdjective() + " " + getRandomNoun();
    setBeerName(beerName);
    console.log(`New beer name: ${beerName}`)
    //console.log(words);
    //console.log(getRandomNoun())
  }

  const getRandomAdjective = () => {
    const adjective = adjectives[Math.floor(Math.random()*adjectives.length)]
    return adjective;
  }

  const getRandomNoun = () => {
    const noun = nouns[Math.floor(Math.random()*nouns.length)]
    //console.log(noun);
    return noun;
  }

  return (
    <div className="App">
      <img src={logo} />
      <div className="title-header">
        <div className="sub-title">
          Beer Name Generator
        </div>
        
      </div>
      
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
