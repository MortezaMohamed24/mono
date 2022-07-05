import {Type} from "../type.js"
import {Optionify} from "../util/optionifty.js"
import {VirtualType} from "../type.js"
import {RawBaseOptions} from "../type.js"


type Content = VirtualType[]
type Options = Omit<RawBaseOptions, "checkClass"> 


const UNDEFINED = Symbol()


const ARRAY = <TContent extends Content, TOptions extends Options>(content: TContent, options?: Partial<TOptions>) => (
  Type<Optionify<TOptions, unknown[], TContent[number]["formatted"][]>>((raw) => {
    const copy: unknown[] = []
    
    for (let [index, item] of raw.entries()) {
      let error: unknown = UNDEFINED

      for (let type of content) {
        try {
          copy.push(type(item, {key: index, strict: true}))
        } catch (e) {
          error = e
        }
      }

      if (error !== UNDEFINED) {
        throw error
      }
    }
    
    return copy
  }, {
    name: "Array",
    classes: ["Array"],
    ...options
  })
)


export default ARRAY