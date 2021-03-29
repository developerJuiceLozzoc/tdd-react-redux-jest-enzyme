import React from "react"
import JottoInput from './JottoInput';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {shallow} from "enzyme"

const defaultProps = [{
  secretWord: ""
}]

const setup = (secretWord="react") => {
  return shallow(<JottoInput secretWord={secretWord}/>)
}


test("should render with no err",function(){
  checkProps(JottoInput,{secretWord: "react"})
  let wrapper = setup()
  let input = findByTestAttr(wrapper,"component-input")
  expect(input.length).toBe(1)
})


describe("state controlled input field",function(){
  test("state updates with value of inputbox cahnge",function(){
    const mockSetCurrentGuess = jest.fn()
    React.useState = jest.fn(function(){
      return ["",mockSetCurrentGuess]
    })
    let wrapper = setup()
    let inputBox = findByTestAttr(wrapper,"input-box")
    let mockEvent = {target: { value: "train"} }
    inputBox.simulate("change",mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")


  })
})
