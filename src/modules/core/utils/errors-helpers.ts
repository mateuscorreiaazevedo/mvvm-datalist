class UnauthorizeError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'UnauthorizeError'
    this.stack = errorType as string
  }
}

class UnprocessableEntityError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'UnprocessableEntityError'
    this.stack = errorType as string
  }
}

class NotFoundError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'NotFoundError'
    this.stack = errorType as string
  }
}

class BadRequestError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'BadRequestError'
    this.stack = errorType as string
  }
}

class ForbiddenError extends Error {
  constructor(errorMessage = '', errorType?: string) {
    super(errorMessage)
    this.name = 'ForbiddenError'
    this.stack = errorType as string
  }
}
class ServerError extends Error {
  constructor() {
    super('Erro no servidor. Por favor, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}

type BaseErrors =
  | ServerError
  | ForbiddenError
  | BadRequestError
  | NotFoundError
  | UnauthorizeError
  | UnprocessableEntityError

export function baseErrors(status: number, errorMessage: string, errorType?: string) {
  const errors: Record<number, BaseErrors> = {
    400: new BadRequestError(errorMessage, errorType),
    401: new UnauthorizeError(errorMessage, errorType),
    403: new ForbiddenError(errorMessage, errorType),
    404: new NotFoundError(errorMessage, errorType),
    422: new UnprocessableEntityError(errorMessage, errorType),
    500: new ServerError(),
  }

  throw errors[status] ?? new ServerError()
}
