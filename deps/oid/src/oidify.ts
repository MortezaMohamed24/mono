import Oid from "./oid.js"
import oidifyOne from "./oidifyOne.js"
import oidifyMany from "./oidifyMany.js"


export function oidify(any: any): Oid | (Oid[]) {
  if (any instanceof Oid) {
    return any
  } else if (Array.isArray(any)) {
    return oidifyMany(any)
  } else {
    return oidifyOne(any)
  }
}


export default oidify