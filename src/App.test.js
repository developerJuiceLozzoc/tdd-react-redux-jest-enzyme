import React from "react"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import Enzyme, { shallow } from "enzyme"
import App from './App';
Enzyme.configure({adapter: new EnzymeAdapter()})

/**
*Factory function to create ShallowWrapper for the app component
* @function setup
* @returns {ShallowWrapper}
*/
const setup = () => shallow(<App />)
const findByTestAttr = (wrapper,val) => wrapper.find(`[data-test='${val}']`)

test('renders w/out error', () => {
  const wrapper = setup()
  let appComponent = findByTestAttr(wrapper,"component-app")
  expect(appComponent.length).toBe(1)
});

test('renders inc button', ()=>{
  const wrapper = setup()
  let button = findByTestAttr(wrapper,"increment-button")
  expect(button.length).toBe(1)
})


test('renders counter display', function(){
  const wrapper = setup()
  let cDisplay = findByTestAttr(wrapper,"counter-display")

  expect(cDisplay.length).toBe(1)
})

test("counter starts at 0",function(){
  const wrapper = setup()
  let count = findByTestAttr(wrapper,"count").text()
  expect(count).toBe("0")
})

test("counter cant go below 0",function(){
  const wrapper = setup()
  let button = findByTestAttr(wrapper,"decrement-button")
  button.simulate("click")

  let count = findByTestAttr(wrapper,"count").text()
  expect(count).toBe("0")
})
test("errrow message when trying to go to -1",function(){
  const wrapper = setup()
  let button = findByTestAttr(wrapper,"decrement-button")
  button.simulate("click")

  let error = findByTestAttr(wrapper,"user-error")
  expect(error.length).toBe(1)

  button = findByTestAttr(wrapper,"increment-button")
  button.simulate("click")
  error = findByTestAttr(wrapper,"user-error")
  expect(error.length).toBe(0)
})
test(" clicking button increments counter ", function(){
  const wrapper = setup()
  let button = findByTestAttr(wrapper,"increment-button")

  button.simulate("click")
  let count = findByTestAttr(wrapper,"count").text()

  expect(count).toBe("1")

})
