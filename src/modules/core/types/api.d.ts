type HttpRequest = {
  url: string
  data?: any
  headers?: any
  params?: any
  method?: 'get' | 'post' | 'put' | 'delete'
}
type HttpResponse<T> = {
  statusCode: number
  body?: T
}
