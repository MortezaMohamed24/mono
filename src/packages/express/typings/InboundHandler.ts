import {Proceed} from "./Proceed.js"


export interface InboundHandlerConfig {
  // P = ParamsDictionary,
  // ResBody = any,
  // ReqBody = any,
  // ReqQuery = ParsedQs,
  // Locals extends Record<string, any> = Record<string, any>
}

export interface RequestHandler<TConfig extends InboundHandlerConfig> {
  (
    req: Request<P, ResBody, ReqBody, ReqQuery, Locals>,
    res: Response<ResBody, Locals>,
    next: Proceed,
  ): void
}
