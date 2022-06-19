export interface IRoute<Route extends string = string> {
  path: string
  stack: any
  all: IRouterHandler<this, Route>
  get: IRouterHandler<this, Route>
  post: IRouterHandler<this, Route>
  put: IRouterHandler<this, Route>
  delete: IRouterHandler<this, Route>
  patch: IRouterHandler<this, Route>
  options: IRouterHandler<this, Route>
  head: IRouterHandler<this, Route>
  checkout: IRouterHandler<this, Route>
  copy: IRouterHandler<this, Route>
  lock: IRouterHandler<this, Route>
  merge: IRouterHandler<this, Route>
  mkactivity: IRouterHandler<this, Route>
  mkcol: IRouterHandler<this, Route>
  move: IRouterHandler<this, Route>
  "m-search": IRouterHandler<this, Route>
  notify: IRouterHandler<this, Route>
  purge: IRouterHandler<this, Route>
  report: IRouterHandler<this, Route>
  search: IRouterHandler<this, Route>
  subscribe: IRouterHandler<this, Route>
  trace: IRouterHandler<this, Route>
  unlock: IRouterHandler<this, Route>
  unsubscribe: IRouterHandler<this, Route>
}
