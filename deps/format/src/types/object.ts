import {Type} from "../type.js"
import {Optionify} from "../util/optionifty.js"
import {VirtualType} from "../type.js"
import {RawBaseOptions} from "../type.js"


type Options = (
  Omit<RawBaseOptions, "checkClass">
)

type Content = {
  [key: string]: VirtualType
  [key: symbol]: VirtualType
  [key: number]: VirtualType
}

type TypeReturn<TContent extends Content> = {
  [Key in keyof TContent]: TContent[Key]["formatted"]
}

const OBJECT = <TContent extends Content, TOptions extends Options>(content: TContent, options?: TOptions) => (
  Type<Optionify<Options, unknown[], TypeReturn<TContent>>>((raw) => {
    const copy: any = {}
  
    for (let [key, type] of Object.entries(content)) {
      copy[key] = type(raw[key as keyof typeof raw], {key, strict: true})
    }

    return copy
  }, {
    name: "Object",
    classes: ["Object"],
    ...options
  })
)


export default OBJECT