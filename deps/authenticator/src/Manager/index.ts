import {User} from "../Core.js"
import {Serializer} from "../Core.js"
import {REQUEST_KEY} from "../constants.js"
import {ManagerClass} from "./class.js"


export function Manager<TUser extends User>(serialize: Serializer<TUser>) {
  return async (request, response, proceed) => {
    const session = request.session = request.session || {}
    const manager = new ManagerClass(session, serialize)

    request[REQUEST_KEY] = manager
    proceed() 
  }
}


export default Manager