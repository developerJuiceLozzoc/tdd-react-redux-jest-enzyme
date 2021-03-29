import React from "react"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"
import Enzyme, { shallow } from "enzyme"
import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()})

test('renders w/out crashing', () => {
  const wrapper = shallow(<App />)

  expect(wrapper.exists()).toBe(true)



});


/*
unite
test one piece of code like a funcitno

integration
how multiple tests work togther, like deadbolt
lock attached to door

acceptance, E2e tests
uses actual browser and server, like using
selenium

functional tests
can be any of the qabove

code based == testing implmentations
functinoal tests == behavior


*/
