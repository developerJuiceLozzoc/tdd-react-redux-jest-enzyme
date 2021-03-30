import {Types} from "../actions"

const {CORRECT_GUESS} = Types
export default function(state=false,action){
  switch(action.type){
    case CORRECT_GUESS:
      return true
    default:
      return state
  }
}
