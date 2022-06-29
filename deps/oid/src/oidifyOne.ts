import Oid from "./oid.js"
import pattern from "./pattern.js"


export function oidifyOne(one: unknown): Oid {
  if (one instanceof Oid) {
    return one
  } else if (typeof one === "string" && pattern.test(one)) {
    return new Oid(one)
  } else {
    throw new Error(`Expected an Oid, or string matching ${pattern.source}`)
  }
}


export default oidifyOne