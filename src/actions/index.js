import axios from "axios"
import {  getLetterMatchCount} from "../helper/jotto"
export const Types ={
  CORRECT_GUESS: "correct jotto guess",
  GUESS_WORD: "making another  guess"
}

export function correctGuess(){
  return {
    type: Types.CORRECT_GUESS
  }
}
export function guessWord(word){
  return function(dispatch,getState){
    const secret = getState().secret
    const LMC = getLetterMatchCount(word,secret)
    dispatch({
      type: Types.GUESS_WORD,
      payload: {guessedWord: word, letterMatchCount: LMC}
    })

    if( word === secret){
      dispatch({
        type: Types.CORRECT_GUESS
      })
    }
  }
}



export const getSecretWord = ()=>{
  return axios
  .get("https://random-word-api.herokuapp.com/word?number=7")
}
