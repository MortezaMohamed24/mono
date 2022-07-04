import {expect} from "errors"
import {VirtualType} from "format"
import {FormatError} from "format"
import {ServerError} from "errors"


export function Payload(key: string, format: VirtualType) {
  return (request, response, proceed) => {
    try {
      request[key] = format(request.body, {strict: true})
      proceed()
    } 
    
    catch (e) {
      expect(e, FormatError, (e) => {
        throw new ServerError({
          status: 401,
          message: e.
        })
      })
    }
  }
}


export default Payload