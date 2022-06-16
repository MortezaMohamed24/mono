import {Type} from "../type.js"
import {Optoinify} from "../util/optionifty.js"
import {RawBaseOptions} from "../type.js"


interface Options extends Omit<RawBaseOptions, "checkClass"> {
  /** 
   * Defaults to `"undefined"`
  */
  which?: undefined | boolean
}

type TypeReturn<TOptions extends Options> = (
  TOptions extends {which: infer Which}
    ? Which extends true
      ? true
      : Which extends false
        ? false
        : boolean
    : boolean
)

const BOOLEAN = <TOptions extends Options>({which, ...options}: Partial<TOptions> = {}) => {
  Type<Optoinify<TOptions, boolean, TypeReturn<TOptions>>>((raw, {INVALID}) => {
    switch (which) {
      case true: if (raw === true) return raw as TypeReturn<TOptions>
      case false: if (raw === false) return raw as TypeReturn<TOptions>
      default: return INVALID
    }
  }, {
    name: "Boolean",
    classes: ["Boolean"],
    ...options
  })
}


export default BOOLEAN