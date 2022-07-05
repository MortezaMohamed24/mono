import {join} from "node:path"


interface Options {
  base?: undefined | string
  paths?: undefined | [RegExp, string][]
}


function Virtuals(options: Options = {}) {
  const base = options.base || "/"
  const paths = options.paths || []


  return (request, response, proceed) => {
    if (request.method !== "GET") { 
      proceed()
      return
    }

    let resolved: string = ""

    for (let item of paths) {
      if (item[0].test(request.path)) {
        resolved = item[1]
        break
      }
    }

    if (!resolved) {
      proceed()
      return
    }

    resolved = join(base, resolved) 

    response.sendFile(resolved, (e) => {
      if (e) { 
        console.log(e)
        proceed() 
      }
    })
  }
}


export {Virtuals}
export default Virtuals