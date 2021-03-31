import moxios from "moxios"
import {getSecretWord} from "./"


describe("get secret word from api",function(){
  beforeEach(function(){
    moxios.install()
  })
  afterEach(function(){
    moxios.uninstall()
  })

  test('secret word is returned',async function(){
    moxios.wait(function(){
      const req = moxios.requests.mostRecent()
      req.respondWith({
        status: 200,
        response: ["party"]
      })
    })
    const mockSetSecretWord = jest.fn()
     await getSecretWord(mockSetSecretWord)
     expect(mockSetSecretWord).toHaveBeenCalledWith("party")


  })

})
