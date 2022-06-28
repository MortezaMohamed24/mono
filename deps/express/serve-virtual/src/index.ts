import {join} from "node:path"
import {Request} from "express"
import {Proceed} from "express"
import {Response} from "express"


interface Options {
  base?: undefined | string
  paths?: undefined | [RegExp, string][]
}


function Virtuals(options: Options = {}) {
  const base = options.base || ""
  const paths = options.paths || []


  return (request: Request, response: Response, proceed: Proceed) => {
    if (request.method !== "GET") { 
      proceed()
      return
    }

    let resolved: string

    for (let item of paths) {
      if (item[0].test(request.path)) {
        resolved = item[1]
      }
    }

    resolved = join(base, request.path) 

    if (!resolved) {
      proceed()
      return
    }

    response.sendFile(resolved, (e) => {
      if (e) { proceed() }
    })
  }
}


export {Virtuals}
export default Virtuals