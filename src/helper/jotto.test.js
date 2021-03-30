import React from "react"
import {getLetterMatchCount} from "./jotto"
import {shallow} from "enzyme"


describe("jotto game system",function(){
  const secretWord = "llama"
  test("returns correct number when NO MATCHING letters",function(){
      let result = getLetterMatchCount("qwerty",secretWord)
      expect(result).toBe(0)
  })
  test("returns correct count with 3 matching letters",function(){
      let result = getLetterMatchCount("lame",secretWord)
      expect(result).toBe(3)
  })
  test("returns correct count when their are duplicate letters IN THE GUESS",function(){
    let result = getLetterMatchCount("lazar",secretWord)
    expect(result).toBe(2)

  })
})
