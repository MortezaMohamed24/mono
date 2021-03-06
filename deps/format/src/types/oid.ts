import {Type} from "../type.js"
import {Optionify} from "../util/optionifty.js"
import {RawBaseOptions} from "../type.js"


type Options = (
  Omit<RawBaseOptions, "checkClass">
)

/** 
 * Matches an Object Id's hex string representation.
*/
const PATTERN = /^[0-9a-fA-F]{24}$/


const OID = <TOptions extends Options>(options: Partial<TOptions> = {}) => (
  Type<Optionify<TOptions, string, string>>((raw, {INVALID}) => {
    raw = raw.trim().toLowerCase()

    if (PATTERN.test(raw)) {
      return raw
    } 
    
    return INVALID
  }, {
    name: "Oid",
    classes: ["String"],
    ...options
  })
)


export default OID