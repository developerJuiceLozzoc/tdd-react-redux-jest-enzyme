import { combineReducers} from 'redux'
import successReducer from "./successReducer"
import wordGuesserReducer from "./wordGuessingReducer"
import secretGuessReducer from "./secretWordReducer"

export default combineReducers({
  success: successReducer,
  guess: wordGuesserReducer,
  secret: secretGuessReducer,
})
