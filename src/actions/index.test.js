import moxios from "moxios"
import {getSecretWord, correctGuess, Types} from "./"
import {storeFactory} from "../../test/testUtils"

describe("get secret word from api",function(){
  beforeEach(function(){
    moxios.install()
  })
  afterEach(function(){
    moxios.uninstall()
  })
  const expect = ["hosiers","valvelets","frostiness","aeromagnetic","mitiest","carousing","loupen"]
  test('secret word is returned',function(){
    const store = storeFactory()
    moxios.wait(function(){
      const req = moxios.requests.mostRecent()
      req.respondWith({
        status: 200,
        response: {data: expect}
      })
    })

    store.dispatch(getSecretWord())

  })


})


describe("correct guess action",function(){
  test("returns action with type `CORRECT_GUESS`",function(){
    const action = correctGuess()
    expect(action).toStrictEqual({
      type: Types.CORRECT_GUESS
    })
  })
})
