import {Types} from "../actions"
const {GUESS_WORD} = Types

export default function(state=[],action){
  switch(action.type){
    case GUESS_WORD:
      return [...state,action.payload]
    default:
     return state
  }
}
