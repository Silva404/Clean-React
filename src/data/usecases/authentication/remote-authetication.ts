import { HttpPostClient } from "data/protocols/http/http-postclient";

export class RemoteAuthetication {
  constructor(
    private readonly url: string,
    private readonly HttpClient: HttpPostClient
  ) { }

  async auth(): Promise<void> {
    await this.HttpClient.post(this.url)
  }
}