export class AuthenticationError extends Error {
  status: number


  constructor(message: string, status: number = 401) {
    super(message)
    this.status = status
  }
}


export default AuthenticationError