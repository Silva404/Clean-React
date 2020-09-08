import { HttpPostClient } from "data/protocols/http/http-post-client";
import { RemoteAuthentication } from "./remote-authetication";

describe('RemoteAuthentication', () => {
  test('Should call HttpClient with correct URL', async () => {
    class HttpPostClientSpy implements HttpPostClient {
      url?: string;

      async post(url: string): Promise<void> {
        this.url = url
      }
    }

    const url = 'any_url'
    const httpPostClientSpy = new HttpPostClientSpy()

    // System Under Test
    const sut = new RemoteAuthentication(url, httpPostClientSpy)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})