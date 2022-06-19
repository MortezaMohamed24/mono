import Error from "#util/error"
import {Request} from "express"
import {INVALID} from "#util/checker"
import {Checkable} from "#util/checker"


const BodyFormatter = <Body>(checkable: Checkable<Body>, error: string) => (
  (request: Request) => {
    const output = checkable.check(request.body)
    
    if (output === INVALID) {
      throw new Error(400, error)
    }
    
    return output as Body
  }
)


export default BodyFormatter