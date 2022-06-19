
  // P = ParamsDictionary,
  // ResBody = any,
  // ReqBody = any,
  // ReqQuery = ParsedQs,
  // Locals extends Record<string, any> = Record<string, any>


export type RequestHandlerParams<TConfig 
extends > =
  | RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
  | ErrorRequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>
  | Array<RequestHandler<P> | ErrorRequestHandler<P>>
