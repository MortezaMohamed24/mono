import {join} from "node:path"
import {Request} from "express"
import {Response} from "express"


interface Options {
  base?: undefined | string
  paths?: undefined | [RegExp, string][]
}


function statics(options: Options = {}) {
  const base = options.base || ""
  const paths = options.paths || []


  return (inbound: Request, outbound: Response, proceed: Function) => {
    if (inbound.method !== "GET") { 
      proceed()
      return
    }

    let resolved: string

    for (let item of paths) {
      if (item[0].test(inbound.path)) {
        resolved = item[1]
      }
    }

    resolved = join(base, inbound.path) 

    if (!resolved) {
      proceed()
      return
    }

    outbound.sendFile(resolved, (e) => {
      if (e) { proceed() }
    })
  }
}



export {statics}
export default statics