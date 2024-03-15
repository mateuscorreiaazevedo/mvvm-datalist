import axios, { AxiosInstance, AxiosResponse } from 'axios'
import { env } from '@/modules/core'

export class Service {
  private api: AxiosInstance

  constructor(
    private readonly baseURL: string = env.baseUrl ??
      `${window.location.protocol}//${window.location.host}/api`
  ) {
    this.api = axios.create({
      baseURL: this.baseURL
    })
  }

  async request<T = any>(props: HttpRequest): Promise<HttpResponse<T>> {
    const { url, data, headers, method = 'get', params } = props
    let response: AxiosResponse

    try {
      response = await this.api.request({
        url,
        method,
        data,
        params,
        headers
      })
    } catch (error) {
      response = (error as any).response
    }

    return {
      statusCode: response.status,
      body: response.data
    }
  }
}
