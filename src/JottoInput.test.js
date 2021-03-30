import React from "react"
import JottoInput from './JottoInput';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {shallow} from "enzyme"

/*

if we want to use destructing we will have to
do some fancy magic with require requireActual


const mockSetCurrentGuess = jest.fn()
jest.mock("react",()=> ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState,mockSetCurrentGuess]
}))
*/


const setup = (success=false,secretWord="react",) => {
  return shallow(
    <JottoInput
      secretWord={secretWord}
      onSubmit={function(){

      }}
      success={success}/>
  )
}




test("should throw no warning with expected props",function(){
  checkProps(JottoInput,{secretWord: "react",success:false})

})

describe("render",function(){

  describe("success is true",function(){
    let wrapper
    beforeEach(function(){
      wrapper=setup(true)
    })
    test("should render with no err",function(){
      let wrapper = setup()
      let input = findByTestAttr(wrapper,"component-input")
      expect(input.length).toBe(1)
    })
    test("it should not show input box",function(){
      const inputBox = findByTestAttr(wrapper,"input-box")
      expect(inputBox.exists()).toBe(false)
    })
    test("submit button doesnt show",function(){
      const submitel = findByTestAttr(wrapper,"submit-button")
      expect(submitel.exists()).toBe(false)
    })
  })

  describe("success is false",function(){
    let wrapper
    beforeEach(function(){
      wrapper=setup(false)
    })
    test("should render with no err",function(){
      let wrapper = setup()
      let inputsect = findByTestAttr(wrapper,"component-input")
      expect(inputsect.length).toBe(1)
    })
    test("It should show the input box",function(){
      const inputBox = findByTestAttr(wrapper,"input-box")
      expect(inputBox.exists()).toBe(true)
    })
    test("Submitbutton should be there",function(){
      const submitel = findByTestAttr(wrapper,"submit-button")
      expect(submitel.exists()).toBe(true)
    })
  })


})


describe("state controlled input field",function(){
  let wrapper;
  let mockSetCurrentGuess = jest.fn()
  let originalUseState;
  beforeEach(function(){
    mockSetCurrentGuess.mockClear()
    originalUseState = React.useState;

    React.useState = jest.fn(function(){
      return ["",mockSetCurrentGuess]
    })
    wrapper = setup()

  })
  afterEach(function(){
    React.useState = originalUseState
  })
  test("state updates with value of inputbox cahnge",function(){

    let inputBox = findByTestAttr(wrapper,"input-box")
    let mockEvent = {target: { value: "train"} }
    inputBox.simulate("change",mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train")


  })

  test("submit button clears input",function(){

    let inputBox = findByTestAttr(wrapper,"submit-button")
    let mockEvent = {target: { value: ""} }
    inputBox.simulate("click",{ preventDefault(){} })

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("")


  })
})
