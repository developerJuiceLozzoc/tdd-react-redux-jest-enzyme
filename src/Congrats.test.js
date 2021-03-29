import React from "react"
import Congrats from './Congrats';
import {findByTestAttr,checkProps} from "../test/testUtils"
import {shallow} from "enzyme"


const setup = (props={}) => shallow(<Congrats {...props}/>)

test('renders without error',function(){
  const wrapper = setup({success: false})
  let component = findByTestAttr(wrapper,"component-congrats")
  expect(component.length).toBe(1)
})

test("renders empty when `success` prop is false",function(){
  const wrapper = setup({success: false})
  let component = findByTestAttr(wrapper,"component-congrats")
  expect(component.text().length).toBe(0)
})

test("renders nothing when `success` prop is true",function(){
  const wrapper = setup({success: true})
  let component = findByTestAttr(wrapper,"congrats-message")
  expect(component.text().length).not.toBe(0);
})

test("does not throw warning with bad prps",function(){
  const expectedProps = {success: false}
  checkProps(Congrats,expectedProps)
})
