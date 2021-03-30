import axios from "axios"

export const getSecretWord = ()=>{
  return axios
  .get("https://random-word-api.herokuapp.com/word?number=7")
}
