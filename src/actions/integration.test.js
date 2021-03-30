import { storeFactory} from "../../test/testUtils"
import {guessWord} from "./"


describe("guessword action dispatcher",function(){
  const secret = "react";
  const BAD_GUESS = "train";

  describe("NO guessed words", function(){
    let store
    const initialState = {secret}
    beforeEach(function(){
      store = storeFactory(initialState);

    })
    test("updates state correctly for unsucc guess",function(){
      store.dispatch(guessWord(BAD_GUESS))
      const expectedState ={
        ...initialState,
        success: false,
        guessedWords: [{
            guessedWord: BAD_GUESS,
            letterMatchCount: 3
        }]
      }
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    })
    test("updates state correctly for successful guess",function(){
      store.dispatch(guessWord(secret))
      const expectedState ={
        ...initialState,
        success: true,
        guessedWords: [{
            guessedWord: secret,
            letterMatchCount: 5
        }]
      }
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    })

  })




  describe("SOME guessed words", function(){
    let store
    const initialState = {
      secret,
      guessedWords: [{
        guessedWord: "party",
        letterMatchCount: 3
      }],
    }
    beforeEach(function(){
      store = storeFactory(initialState);

    })
    test("updates state correctly for unsucc guess",function(){
      store.dispatch(guessWord(BAD_GUESS))
      const expectedState ={
        ...initialState,
        success: false,
        guessedWords:[{
            guessedWord: "party",
            letterMatchCount: 3
        },{
            guessedWord: BAD_GUESS,
            letterMatchCount: 3
        }]
      }
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    })


    test("updates state correctly for successful guess",function(){
      store.dispatch(guessWord(secret))
      const expectedState ={
        ...initialState,
        success: true,
        guessedWords: [{
            guessedWord: "party",
            letterMatchCount: 3
        },{
            guessedWord: secret,
            letterMatchCount: 5
        }]
      }
      const newState = store.getState()
      expect(newState).toEqual(expectedState)
    })

  })



})
