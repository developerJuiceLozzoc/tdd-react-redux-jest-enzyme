import axios from "axios"

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
    return {
      type: Types.GUESS_WORD,
      payload: word
    }
  }

}
export const getSecretWord = ()=>{
  return axios
  .get("https://random-word-api.herokuapp.com/word?number=7")
}
