import { render, screen } from '@testing-library/react';
import App from './App';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {mount} from "enzyme"


const setup = (state={}) => {
  const wrapper = mount(<App />);

  // add value to inputBox
  const inputBox = findByTestAttr(wrapper,"input-box")
  inputBox.simulate("change",{target: { value: "train" }})
  // simulate click
  const submitButton = findByTestAttr(wrapper,"submit-button")
  submitButton.simulate('click', {preventDefault(){} })

  return wrapper
}


describe.skip("no words guessed",function(){
  let wrapper
  beforeEach(function(){
    wrapper = setup({
      secretWord: "react",
      success: false,
      guessedWords: []
    });
  })

  test("creates guessed words table with 1 row",function(){
    const guessedWordRows = findByTestAttr(wrapper,"guessed-word")
    expect(guessedWordRows).toHaveLength(1)
  })

})


describe.skip("some words guessed",function(){
  let wrapper
  beforeEach(function(){
    wrapper = setup({
      secretWord: "react",
      success: false,
      guessedWords: [
      {guessedWord: "train", letterMatchCount: 3},
      {guessedWord: "party", letterMatchCount: 3},
    ]
    });
  })

  test("adds row to guessedWordTable",function(){
    const guessedWordRows = findByTestAttr(wrapper,"guessed-word")
    expect(guessedWordRows).toHaveLength(3)
  })
})

describe.skip("guesses the secret wrod",function(){
  let wrapper
  beforeEach(function(){
    wrapper = setup({
      secretWord: "react",
      success: false,
      guessedWords: [
      {guessedWord: "train", letterMatchCount: 3},
      {guessedWord: "party", letterMatchCount: 3},
      {guessedWord: "react", letterMatchCount: 5},
    ]
    });
  })

  test("show the contrats",function(){

    const congrats = findByTestAttr(wrapper,"congrats-message")
    expect(congrats.exists()).toBe(true)
  })
  test("hide the input form",function(){
    const inputLabel = findByTestAttr(wrapper,"input-box")
    expect(inputLabel.exists()).not.toBe(true)

  })
})
