import axios from "axios"
import {  getLetterMatchCount} from "../helper/jotto"
export const Types ={
  CORRECT_GUESS: "correct jotto guess",
  GUESS_WORD: "making another  guess",
  SET_SECRET_WORD: "seth the secret",
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

export const getSecretWord = ()=> {
  return function(dispatch){
    return axios.get("https://random-word-api.herokuapp.com/word?number=7")
    .then(response => {
      dispatch({
        type: Types.SET_SECRET_WORD,
        payload: response.data[0]
      })
    })
  }
}

/*
export const getSecretWord = ()=>{
  return function(dispatch){
    return axios
    .get("https://random-word-api.herokuapp.com/word?number=7")
    .then(function(response){
      response.data.sort(function(a,b){
        if(a.length > b.length){
          return 1
        }
        else if (a.length <= b.length){
          return -1
        }
      })
      console.log("hi");
      dispatch({
        type: Types.SET_SECRET_WORD,
        payload: response.data[1]
      })
    })
  }

}
*/
