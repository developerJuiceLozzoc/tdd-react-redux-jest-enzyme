import { combineReducers} from 'redux'
import successReducer from "./successReducer"
import wordGuesserReducer from "./wordGuessingReducer"
export default combineReducers({
  success: successReducer,
  guess: wordGuesserReducer,
})
