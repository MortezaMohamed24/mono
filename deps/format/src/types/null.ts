import {Type} from "../type.js"
import {Optionify} from "../util/optionifty.js"
import {RawBaseOptions} from "../type.js"


type Options = (
  Omit<RawBaseOptions, "checkClass">
)

const NULL = <TOptions extends Options>(options?: TOptions) => (
  Type<Optionify<TOptions, null, null>>(() => (
    null
  ), {
    name: "Null", 
    classes: ["Null"],
    ...options
  })
)


export default NULL