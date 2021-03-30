import moxios from "moxios"
import {getSecretWord} from "./"


describe("get secret word from api",function(){
  beforeEach(function(){
    moxios.install()
  })
  afterEach(function(){
    moxios.uninstall()
  })

  test('secret word is returned',function(){
    moxios.wait(function(){
      const req = moxios.requests.mostRecent()
      req.respondWith({
        status: 200,
        response: {data: ["hosiers","valvelets","frostiness","aeromagnetic","mitiest","carousing","loupen"]}
      })
    })

    getSecretWord()
    .then(function(reponse){
      expect(response.data.length).toBe(7)

    })

  })

})
