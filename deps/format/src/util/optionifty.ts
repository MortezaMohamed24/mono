import {RawInlineOptions} from "../type.js"


export type Optoinify<TOptions extends RawInlineOptions, TRaw, TFormatted> = {
  raw: TRaw
  strict: TOptions["strict"]
  boolean: TOptions["boolean"]
  fallback: TOptions["fallback"] 
  optional: TOptions["optional"] 
  formatted: TFormatted
}


export default Optoinify