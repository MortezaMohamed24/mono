export interface CotrArgument {
  status: number
  message: string
}


export class ServerError extends Error {
  status: number

  constructor(arg: CotrArgument) {
    super(arg.message)
    this.status = arg.status
  }
}


export default ServerError