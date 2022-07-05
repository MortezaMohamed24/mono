import {RawInlineOptions} from "../type.js"


export type Optionify<TOptions extends RawInlineOptions, TRaw, TFormatted> = {
  raw: TRaw
  strict: TOptions["strict"]
  boolean: TOptions["boolean"]
  fallback: TOptions["fallback"]
  optional: TOptions["optional"]
  formatted: TFormatted
}


export default Optionify