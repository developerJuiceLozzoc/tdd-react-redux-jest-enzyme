import React from "react"
import JottoInput from './JottoInput';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {shallow} from "enzyme"

const defaultProps = [{
  secretWord: ""
}]

const setup = (props={}) => {
  let el = {...defaultProps, ...props}
  return shallow(<JottoInput {...el}/>)
}


test("should render with no err",function(){
  checkProps(JottoInput,{secretWord: "react"})
  let wrapper = setup()
  let input = findByTestAttr(wrapper,"component-input")
  expect(input.length).toBe(1)
})
