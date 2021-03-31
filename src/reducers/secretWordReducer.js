import {Types} from "../actions"
const {SET_SECRET_WORD} = Types

export default function(state="",action){
  switch(action.type){
    case SET_SECRET_WORD:
    return action.payload
    default:
      return state
  }
}
