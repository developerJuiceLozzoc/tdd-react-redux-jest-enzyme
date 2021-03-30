import {Types} from "../actions"
import successReducer from "./successReducer"


test("when previous state is undefined, return false",function(){
  const newState = successReducer(undefined,{})
  expect(newState).toBe(false)
})

test("unknown action type, return false",function(){
  const newState = successReducer(undefined,{ type: "unknown"})
  expect(newState).toBe(false)
})


test("return true for correct guess action",function(){
  const newState = successReducer(undefined,{})
  expect(newState).toBe(false)
})
