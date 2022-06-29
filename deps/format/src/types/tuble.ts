import {Type} from "../type.js"
import {Optoinify} from "../util/optionifty.js"
import {VirtualType} from "../type.js"
import {RawBaseOptions} from "../type.js"


type Content = (
  VirtualType[]
)

type Options = (
  Omit<RawBaseOptions, "checkClass">
)

type TypeReturn<TContent extends Content> = (
  TContent[number]["formatted"][]
) 


const TUBLE = <TContent extends Content, TOptions extends Options>(content: TContent, options?: TOptions) => (
  Type<Optoinify<TOptions, unknown[], TypeReturn<TContent>>>((raw) => {
    const copy: TypeReturn<TContent> = []
    
    for (let [index, type] of content.entries()) {
      copy[index] = type(raw [index], {key: index, strict: true})
    }

    return copy
  }, {
    name: "Tuble",
    classes: ["Array"],
    ...options
  })
)


export default TUBLE