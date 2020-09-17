import { RemoteAuthetication } from "./remote-authetication"
import { HttpPostClientSpy } from "../../tests/mock-http-client"

describe('RemoteAuthentication', () => {
  test('Should call HttpPostClient with correct URL', () => {
    
    const url = 'any_url' 
    const httpPostClientSpy = new HttpPostClientSpy()
    const sut = new RemoteAuthetication(url, httpPostClientSpy)
    sut.auth()

    expect(httpPostClientSpy.url).toBe(url)
  })
})