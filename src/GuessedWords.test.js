import React from "react"
import GuessedWords from './GuessedWords';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {shallow} from "enzyme"



const defaultProps = [{
  guessedWords: [{guessedWord: "train", letterMatchCount: 3}]
}]

const setup = (props={}) => {
  let el = {...defaultProps, ...props}
  return shallow(<GuessedWords {...el}/>)
}



test("should render with no err",function(){
  checkProps(GuessedWords,defaultProps)
})


describe("if there are no words guessed", function(){
  let wrapper;
  beforeEach(() =>{
    wrapper = setup({guessedWords: []});
  })
  test("renders without err",function(){
    let component = findByTestAttr(wrapper,"component-guessed-words")
    expect(component.length).toBe(1)
  })
  test("renders instructions to guess a word",function(){
    let instructions = findByTestAttr(wrapper,"guess-instructions")
    expect(instructions.text().length).not.toBe(0)
  })
})

describe(" if there ARE words guessed",function(){
  let wrapper;
  let guessedWords = [
    {guessedWord: "train", letterMatchCount: 3},
    {guessedWord: "agile", letterMatchCount: 1},
    {guessedWord: "party", letterMatchCount: 5},
  ]
  beforeEach(() =>{
    wrapper = setup({guessedWords });
  })
  test("render `guessed words` section",function(){
    const guessedWordsNode = findByTestAttr(wrapper,'guessed-words')
    expect(guessedWordsNode.length).toBe(1)
  })
  test("correct number of guessed letters",function(){
    let guessedWordsNodes = findByTestAttr(wrapper,'guessed-word')
    expect(guessedWordsNodes.length).toBe(guessedWords.length)
  })

})
