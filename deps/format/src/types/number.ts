import {Type} from "../type.js"
import {Optionify} from "../util/optionifty.js"
import {RawBaseOptions} from "../type.js"


interface Options extends Omit<RawBaseOptions, "checkClass"> {
  nan?: undefined | boolean
  min?: undefined | number 
  max?: undefined | number 
  safe?: undefined | boolean
  name?: undefined | string
  finite?: undefined | boolean
}

const NUMBER = <TOptions extends Options>({nan, min, max, safe, finite, ...options}: Partial<TOptions> = {}) => (
  Type<Optionify<TOptions, number, number>>((raw, {INVALID}) => {
    if (nan) {
      if (Object.is(raw, NaN)) {
        return raw
      } else {
        return INVALID
      }
    }

    if (Object.is(raw, NaN)) {
      return INVALID
    }

    if ((
      min !== undefined ? raw >= min : true
    ) && (
      max !== undefined ? raw <= max : true
    ) && (
      safe ? Number.MAX_SAFE_INTEGER >= raw && raw <= Number.MAX_SAFE_INTEGER : true
    ) && (
      finite ? Number.isFinite(raw) : true
    )) {
      return raw
    }
    
    return INVALID
  }, {
    name: "Number",
    classes: ["Number"],
    ...options
  })
)


export default NUMBER