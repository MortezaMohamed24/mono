export type ApplicationRequestHandler<T> = (
  & IRouterHandler<T> 
  & IRouterMatcher<T> 
  & ((...handlers: RequestHandlerParams[]) => T)
