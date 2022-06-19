import {Proceed} from "./Proceed.js"


export type ErrorInboundHandlerConfig = {
  // P = ParamsDictionary,
  // ResBody = any,
  // ReqBody = any,
  // ReqQuery = ParsedQs,
  // Locals extends Record<string, any> = Record<string, any>

}

export type ErrorRequestHandler<TConfig extends ErrorInboundHandlerConfig> = (
  err: any,
  req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
  res: Response<ResBody, Locals>,
  next: Proceed,
) => void
