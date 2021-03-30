import React from "react"
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import JottoInput from "./JottoInput"
import {getSecretWord} from "./actions"


function App() {
  let success = false
  let secretWord = "react"
  let history = []
  React.useEffect(function(){
    getSecretWord()
  },[])
  return (
    <div data-test="component-app" className="container">
      <h1> jotto </h1>
      <Congrats success={success} />
      <JottoInput success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords={history} />
    </div>
  );
}

export default App;
