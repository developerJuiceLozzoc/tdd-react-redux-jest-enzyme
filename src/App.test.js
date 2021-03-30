import { render, screen } from '@testing-library/react';
import App from './App';
import {findByTestAttr,checkProps,storeFactory} from "../test/testUtils"
import {mount} from "enzyme"
import {Provider} from "react-redux"
import {createStore} from "redux"
jest.mock('./actions')
import {getSecretWord as mockGetSecretWord} from "./actions"

function setup(){
  return mount(<Provider store={storeFactory()}><App /></Provider>)
}

test('renders app without problem', () => {
  const app = setup()
  let item = findByTestAttr(app,"component-app")
  expect(item).toHaveLength(1)
});


describe("get secret word",function(){
  beforeEach(function(){
    mockGetSecretWord.mockClear()
  })
  test("get secret word on app mount",function(){
    const wrapper = setup()
    expect(mockGetSecretWord).toHaveBeenCalledTimes(1)
  })

  test("getSecretWord does not run on app update",function(){
    const wrapper = setup()
    mockGetSecretWord.mockClear()
    wrapper.setProps();
    expect(mockGetSecretWord).toHaveBeenCalledTimes(0)


  })
})
