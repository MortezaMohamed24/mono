import {Oid} from "oid"
import {deduplicate} from "./deduplicate.js"


type Config = {
  ids?: undefined | Oid[]
  query?: undefined | object
}

type Output<T extends Config> = (
  T["ids"] extends undefined 
    ? T["query"] extends undefined 
      ? {}
      : T["query"] 
    : T["query"] extends undefined 
      ? {$or: {_id: Oid}[]}
      : T["query"] & {$or: {_id: Oid}[]}
)

function idsWithQuery<T extends Config>(ids: T["ids"], query: T["query"]) {
  let output: any = {}

  if (query) {
    output = {...query}
  } 
  
  if (ids) {
    if (ids.length > 0) {
      output.$or = deduplicate(ids).map(_id => ({_id}))
    } else {
      return {} as Output<T>
    }
  }

  for (let key in output) {
    if (output[key] !== undefined) {
      return output
    }
  }

  return {} as Output<T>
}


export {idsWithQuery}
export default idsWithQuery