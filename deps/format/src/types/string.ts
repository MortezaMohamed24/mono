import {Type} from "../type.js"
import {escape} from "html-escaper"
import {Optionify} from "../util/optionifty.js"
import {RawBaseOptions} from "../type.js"


interface Options extends Omit<RawBaseOptions, "checkClass"> {
  /** 
   * Defaults to `0`.
  */
  min?: undefined | number
  /** 
   * Defaults to `Infinity`.
  */
  max?: undefined | number
  /** 
   * Defaults to `"String"`.
  */
  name?: undefined | string
  /** 
   * Defaults to `"none"`.
  */
  trim?: undefined | "both" | "start" | "end" | "none"
  /** 
   * Defaults to `"original"`.
  */
  case?: undefined | "lower" | "upper" | "capital" | "original"
  /** 
   * Defaults to `"none"`.
  */
  escape?: undefined | "html" | "none"
  /** 
   * Defaults to `undefined`.
  */
  length?: undefined | number
  /** 
   * Defaults to `undefined`.
  */
  pattern?: undefined | RegExp
  /** 
   * Defaults to `undefined`.
  */
  compact?: undefined | boolean | [RegExp, string]
}

const STRING = <TOptions extends Options>(options: Partial<TOptions> = {}) => (
  Type<Optionify<TOptions, string, string>>((raw, {INVALID}) => {
    if (options.compact === true) {
      raw = raw.replace(/\s+/ug, " ")
    } else if (options.compact) {
      raw = raw.replace(options.compact[0], options.compact[1])
    }

    if (options.trim === "both") {
      raw = raw.trim()
    } else if (options.trim === "start") {
      raw = raw.trimStart()
    } else if (options.trim === "end") {
      raw = raw.trimEnd()
    }

    if (options.case === "lower") {
      raw = raw.toLowerCase()
    } else if (options.case === "upper") {
      raw = raw.toUpperCase()
    } else if (options.case === "capital") {
      raw = raw[0].toUpperCase() + raw.slice(1).toLowerCase()
    }

    if (options.escape === "html") {
      raw = escape(raw)
    }
    
    if ((
      options.max !== undefined && raw.length > options.max
    ) || (
      options.min !== undefined && raw.length < options.min
    ) || (
      options.length !== undefined && raw.length !== options.length
    ) || (
      options.pattern !== undefined && !options.pattern.test(raw)
    )) {
      return INVALID
    }

    return raw
  }, {
    name: "String", 
    classes: ["String"],
    ...options
  })
)


export default STRING