import React from "react"
import GuessedWords from './GuessedWords';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {shallow} from "enzyme"


const defaultProps = [{
  guessedWords: [{guessedWord: "train", letterMatchCount: 3}]
}]

const setup = (props={}) => {
  let el = {...defaultProps, ...props}
  shallow(<GuessedWords {...el}/>)
}



test("should render with no err",function(){
  checkProps(GuessedWords,defaultProps)
})


describe("if there are no words guessed", function(){
  let wrapper
  beforeEach(function(){
    wrapper = setup({guessedWords: []});
  })
  test("renders without err",function(){
    let component = findByTestAttr(wrapper,"component-guessed-words")
    expect(component.length).toBe(1)
  })
  test("renders instructions to guess a word",function(){
    let instructions = findByTestAttr(wrapper,"guess-instructions")
    expect(instructions.length).toBe(1)
  })
})

describe(" if there ARE words guessed",function(){

})
