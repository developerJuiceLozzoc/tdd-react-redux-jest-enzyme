import { storeFactory} from "../../test/testUtils"
import {guessWord} from "./"


describe("guessword action dispatcher",function(){
  const secret = "react";
  const BAD_GUESS = "train";

  describe("NO guessed words", function(){
    let store
    const initialState = {secretWord: secret}
    beforeEach(function(){
      store = storeFactory(initialState);
      
    })
    test("updates state correctly for unsucc guess",function(){
      store.dispatch(guessWord(BAD_GUESS))
=      const expectedState ={
        ...initialState,
        success: false,
        guessedWord: [{
            guessedWord: BAD_GUESS,
            letterMatchCount: 3
        }]
      }
      const newState = store.getState
      expect(newState).toEqual(expectedState)
    })
    test("updates state correctly for successful guess",function(){

    })

  })




  describe("SOME guessed words", function(){
    test("updates state correctly for unsucc guess",function(){

    })
    test("updates state correctly for successful guess",function(){

    })

  })



})
