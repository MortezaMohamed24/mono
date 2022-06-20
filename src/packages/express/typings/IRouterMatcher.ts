import {Method} from "./Method.js"


export interface IRouterMatcher<T, TMethod extends Method = Method> {
  <
    Route extends string,
    Paramaeters = RouteParameters<Route>,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
  >(
    // tslint:disable-next-line no-unnecessary-generics (it"s used as the default type parameter for P)
    path: Route,
    // tslint:disable-next-line no-unnecessary-generics (This generic is meant to be passed explicitly.)
    ...handlers: Array<RequestHandler<Paramaeters, ResBody, ReqBody, ReqQuery, Locals>>
  ): T


  <
    Path extends string,
    P = RouteParameters<Path>,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
  >(
    // tslint:disable-next-line no-unnecessary-generics (it"s used as the default type parameter for P)
    path: Path,
    // tslint:disable-next-line no-unnecessary-generics (This generic is meant to be passed explicitly.)
    ...handlers: Array<RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>
  ): T
  <
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
  >(
    path: PathParams,
    // tslint:disable-next-line no-unnecessary-generics (This generic is meant to be passed explicitly.)
    ...handlers: Array<RequestHandler<P, ResBody, ReqBody, ReqQuery, Locals>>
  ): T
  <
    P = ParamsDictionary,
    ResBody = any,
    ReqBody = any,
    ReqQuery = ParsedQs,
    Locals extends Record<string, any> = Record<string, any>
  >(
    path: PathParams,
    // tslint:disable-next-line no-unnecessary-generics (This generic is meant to be passed explicitly.)
    ...handlers: Array<RequestHandlerParams<P, ResBody, ReqBody, ReqQuery, Locals>>
  ): T
  (path: PathParams, subApplication: Application): T
}