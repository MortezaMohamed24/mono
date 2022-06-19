import {RemoveTail} from "./util/string.js"


export type Params = (
  | ParametersArray
  | ParametersObject 
)

export type PathParams = (
	| string 
	| RegExp 
	| Array<string | RegExp>
)

export type ParametersArray = (
	string[]
)

export type ParametersObject = {
  [key: string]: string
}

export type GetRouteParameter<TPath extends string> = (
  RemoveTail<RemoveTail<RemoveTail<TPath, `/${string}`>, `-${string}`>, `.${string}`>
)

export type RouteParameters<Route extends string> = string extends Route
  ? ParametersObject
  : Route extends `${string}(${string}`
    ? ParametersObject //TODO: handling for regex parameters
    : Route extends `${string}:${infer Rest}`
      ? & (
            GetRouteParameter<Rest> extends never
              ? ParametersObject
              : GetRouteParameter<Rest> extends `${infer ParameterName}?`
                ? { [P in ParameterName]?: string }
                : { [P in GetRouteParameter<Rest>]: string }
        ) 
        & (
            Rest extends `${GetRouteParameter<Rest>}${infer Next}`
              ? RouteParameters<Next> 
              : unknown
          )
      : {}