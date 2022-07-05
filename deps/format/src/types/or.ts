import {Type} from "../type.js"
import {VALID} from "../symbols.js"
import {Optionify} from "../util/optionifty.js"
import {VirtualType} from "../type.js"
import {RawBaseOptions} from "../type.js"


type Options = Omit<RawBaseOptions, "classes" | "checkClass">
type Operands = VirtualType[]


type TypeReturn<TOperands extends Operands> = (
  TOperands extends []
    ? VALID 
    : TOperands[number]["formatted"]
)


const OR = <TOperands extends Operands, TOptions extends Options>(operands: TOperands, options?: TOptions) => (
  Type<Optionify<TOptions, unknown[], TypeReturn<TOperands>>>((raw, {VALID, INVALID}) => {
    let valid = true


    for (let type of operands) {
      const formatted = type(raw, {strict: false})

      if (formatted === INVALID) {
        valid = false
      } else {
        return formatted as TypeReturn<TOperands>
      }
    }
    

    return valid ? VALID : INVALID
  }, {
    name: "Or",
    ...options,
  })
)


export default OR