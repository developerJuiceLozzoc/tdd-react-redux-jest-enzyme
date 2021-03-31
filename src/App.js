import React from "react"
import Congrats from "./Congrats"
import GuessedWords from "./GuessedWords"
import JottoInput from "./JottoInput"
import {getSecretWord} from "./actions"
import {useSelector,useDispatch} from "react-redux"


function App() {
  let success = useSelector((state)=>state.success)
  let secretWord = useSelector((state)=>state.secret)
  let history = useSelector((state)=>state.guessedWords)
  const dispatch = useDispatch()
  React.useEffect(function(){
    dispatch(getSecretWord())
  },[])
  return (
    <div data-test="component-app" className="container">
      <h1> jotto: hint hint {secretWord}</h1>
      <Congrats success={success} />
      <JottoInput success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords={history} />
    </div>
  );
}

export default App;
