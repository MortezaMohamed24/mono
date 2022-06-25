export as namespace qs


declare namespace QueryString {
  interface DefaultDecoder {
    (str: string, decoder?: any, charset?: string): string
  }
  
  interface DefaultEncoder {
    (str: any, defaultEncoder?: any, charset?: string): string
  }

  interface StringifyOptions {
    sort?: ((a: any, b: any) => number) | undefined
    format?: 'RFC1738' | 'RFC3986' | undefined
    encode?: boolean | undefined
    filter?: Array<string | number> | ((prefix: string, value: any) => any) | undefined
    encoder?: ((str: any, defaultEncoder: DefaultEncoder, charset: string, type: 'key' | 'value') => string) | undefined
    charset?: 'utf-8' | 'iso-8859-1' | undefined
    indices?: boolean | undefined
    delimiter?: string | undefined
    skipNulls?: boolean | undefined
    allowDots?: boolean | undefined
    arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma' | undefined
    serializeDate?: ((d: Date) => string) | undefined
    addQueryPrefix?: boolean | undefined
    charsetSentinel?: boolean | undefined
    encodeValuesOnly?: boolean | undefined
    strictNullHandling?: boolean | undefined
  }

  interface ParseOptions {
    comma?: boolean | undefined
    depth?: number | false | undefined
    decoder?: ((str: string, defaultDecoder: DefaultDecoder, charset: string, type: 'key' | 'value') => any) | undefined
    charset?: 'utf-8' | 'iso-8859-1' | undefined
    delimiter?: string | RegExp | undefined
    arrayLimit?: number | undefined
    allowDots?: boolean | undefined
    parseArrays?: boolean | undefined
    plainObjects?: boolean | undefined
    allowPrototypes?: boolean | undefined
    parameterLimit?: number | undefined
    strictNullHandling?: boolean | undefined
    ignoreQueryPrefix?: boolean | undefined
    charsetSentinel?: boolean | undefined
    interpretNumericEntities?: boolean | undefined
  }

  interface ParsedQs { 
    [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[] 
  }

  interface Stringify {
    (obj: any, options?: StringifyOptions): string
  }

  interface Parse {
    (str: string, options?: ParseOptions & { decoder?: never | undefined }): ParsedQs
    (str: string | Record<string, string>, options?: ParseOptions): {[key: string]: unknown}
  }


  const parse: Parse
  const stringify: Stringify
}


export = QueryString