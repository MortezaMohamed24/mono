import {Oid} from "oid"


type Config = {
  id?: undefined | Oid
  query?: undefined | object
}

type Output<T extends Config> = (
  T["id"] extends undefined 
    ? T["query"] extends undefined 
      ? {} 
      : T["query"]
    : T["query"] extends undefined 
      ? {_id: Oid} 
      : T["query"] & {_id: Oid}
)

function idWithQuery<T extends Config>(id: T["id"], query: T["query"]) {
  let output: any = {}

  if (query) {
    output = {...query}
  } if (id) {
    output._id = id
  } 

  return output as Output<T>
}


export {idWithQuery}
export default idWithQuery