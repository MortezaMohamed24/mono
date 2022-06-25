export as namespace qs


declare namespace QueryString {
  interface defaultDecoder {
    (str: string, decoder?: any, charset?: string): string
  }
  
  interface defaultEncoder {
    (str: any, defaultEncoder?: any, charset?: string): string
  }

  interface IStringifyOptions {
    sort?: ((a: any, b: any) => number) | undefined
    format?: 'RFC1738' | 'RFC3986' | undefined
    encode?: boolean | undefined
    encoder?: ((str: any, defaultEncoder: defaultEncoder, charset: string, type: 'key' | 'value') => string) | undefined
    filter?: Array<string | number> | ((prefix: string, value: any) => any) | undefined
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

  interface IParseOptions {
    comma?: boolean | undefined
    depth?: number | false | undefined
    decoder?: ((str: string, defaultDecoder: defaultDecoder, charset: string, type: 'key' | 'value') => any) | undefined
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

  function stringify(
    obj: any, 
    options?: IStringifyOptions,
  ): string

  function parse(
    str: string, 
    options?: IParseOptions & { decoder?: never | undefined },
  ): ParsedQs

  function parse(
    str: string | Record<string, string>, 
    options?: IParseOptions,
  ): { 
    [key: string]: unknown 
  }
}


export = QueryString