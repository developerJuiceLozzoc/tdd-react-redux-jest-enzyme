import React from "react"
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import JottoInput from "./JottoInput"
import {getSecretWord} from "./actions"


function App() {
  const [secretWord, setSecretWord] = React.useState("")
  let success = false
  let history = []
  React.useEffect(function(){
    getSecretWord(setSecretWord)
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
