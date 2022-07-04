import http from "node:http"

const NativeError = globalThis.Error


class Error extends NativeError {
  statusCode: number
  statusText: string | undefined

  constructor(statusCode: number, message?: string | undefined) {
    super(message)
    this.statusCode = statusCode
    this.statusText = http.STATUS_CODES[statusCode]
  }
}


export {Error}
export default Error