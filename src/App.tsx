import { useState } from 'react'
import words from 'categorized-words'
import logo from './assets/logo.png';
import './App.css'

const nouns = words.N;
const adjectives = words.A;
const verbs = words.V;

const pronouns = words.P;

const interjections = words.I;

function App() {

  const [beerName, setBeerName] = useState('');

  const generateBeerName = () => {
    //const beerName = getRandomVerb() + " " + getRandomAdjective() + " " + getRandomNoun();
    const beerName = getRandomAssortment()
    setBeerName(beerName);
    console.log(`New beer name: ${beerName}`)
    //getRandomAssortment();
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

  const getRandomVerb = () => {
    const verb = verbs[Math.floor(Math.random()*verbs.length)]
    return verb
  }

  const getRandomAssortment = () => {
    switch(Math.floor(Math.random()*3)){
      case 0:
        console.log(`case 0`);
        return getRandomNoun();
        
      case 1:
        console.log(`case 1`);
        return getRandomAdjective() + " " + getRandomNoun();
        
      case 2:
        console.log(`case 2`);
        return getRandomVerb() + " " + getRandomAdjective() + " " + getRandomNoun();

    }
  }


  return (
    <div className="App">
      <div className="container">
      <img className='logo-image' src={logo} />
      <div className="title-header">
        <div className="sub-title">
          Beer Name <br></br><br></br>Generator
        </div>
        <div className='version-number'>
            v0.1 alpha
        </div>  
      </div>
      
      <div className='beerNameDisplay'>
        {beerName}
      </div>
      <br>
      </br>
      <button className='generateButton' onClick={() => generateBeerName()}>Go!</button>
      </div>
    </div>
  )
}

export default App
