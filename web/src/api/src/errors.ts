export type ApiError = (
  | ApiBodyError
  | ApiConnectionError
  | ApiBadRequestError
  | ApiUnrecognizedError
  | ApiUnauthorizedError
  | ApiInternalServerError  
)

/** 
 * Response body is missing when it's required or body is not valid
*/
export class ApiBodyError extends Error {
  constructor() {
    super("Server Responded With Unexpected Data")
  }
}
/** 
 * Client is offline or server is shutdown 
*/
export class ApiConnectionError extends Error {
  constructor() {
    super("Couldn't Connect to the Server, Check Your Connection and Proxy Settings Or Try Again Later")
  }
}

export class ApiBadRequestError extends Error {
  constructor() {
    super("Bad Request")
  }
}

export class ApiUnrecognizedError extends Error {
  constructor() {
    super("Unexpected Error Occourd")
  }
}

export class ApiUnauthorizedError extends Error {
  constructor() {
    super("You Are Not Authorized!")
  }
}

export class ApiInternalServerError extends Error {
  constructor() {
    super("Internal Server Error")
  }
}