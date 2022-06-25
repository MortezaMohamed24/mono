import {ANY} from "./symbols.js"
import {VALID} from "./symbols.js"
import {INVALID} from "./symbols.js"
import {FormatError} from "./error.js"


export type ClassName = (
  | ANY 
  | string
)

export interface RawBaseOptions<TConfigs extends Configs = Configs> {
  /**
   * Defaults to "UnknownType".
  */
  name?: undefined | string | symbol | number
  /**
   * Defaults to false.
  */
  strict?: undefined | TConfigs["strict"]
  /**
   * Defaults to false.
  */
  boolean?: undefined | TConfigs["boolean"] 
  /**
   * Defaults to [ANY].
  */
  classes?: undefined | ClassName[] 
  /**
   * Defaults to undefined.
  */
  fallback?: undefined | TConfigs["fallback"]
  /**
   * Defaults to false.
  */
  optional?: undefined | TConfigs["optional"]
  /**
   * Defaults to true.
  */
  checkClass?: undefined | TConfigs["checkClass"]
}

export interface PreparedBaseOptions {
  name: string | symbol | number 
  strict: boolean 
  boolean: boolean 
  classes: ClassName[] 
  fallback: unknown 
  optional: boolean 
  checkClass: boolean
}

export interface RawInlineOptions {
  key?: undefined | string | symbol | number
  strict?: undefined | boolean 
  boolean?: undefined | boolean 
  fallback?: undefined | unknown 
  optional?: undefined | boolean 
}

export interface FinalOptions {
  key: string | symbol | number
  name: string | symbol | number 
  VALID: VALID
  strict: boolean 
  boolean: boolean 
  INVALID: INVALID
  classes: ClassName[] 
  fallback: unknown 
  optional: boolean 
  checkClass: boolean
}

export interface CopyOptions {
  name?: undefined | string | symbol | number
  strict?: undefined | boolean 
  boolean?: undefined | boolean 
  classes?: undefined | ClassName[] 
  fallback?: undefined | unknown 
  optional?: undefined | boolean 
}

export interface Configs {
  raw?: unknown
  strict?: undefined | boolean 
  boolean?: undefined | boolean 
  classes?: undefined | ClassName[] 
  fallback?: undefined | unknown 
  optional?: undefined | boolean 
  formatted?: undefined | unknown 
  checkClass?: undefined | boolean
}

export interface Format<TConfigs extends Configs> {
  (
    rawValue: TConfigs["raw"], 
    finalOptions: FinalOptions
  ): (
    | VALID
    | INVALID
    | TConfigs["formatted"]
  )
}

export type Merge<A extends object, B extends object> = {
  [Key in (keyof A) | (keyof B)]: 
    B extends {[TKey in Key]?: infer TValue}
      ? TValue 
      : A extends {[TKey in Key]?: infer TValue}
        ? TValue
        : never
}

export interface Type<TConfigs extends Configs = Configs> {
  <TInlineOptions extends RawInlineOptions>(
    rawValue: unknown, 
    inlineOptions?: TInlineOptions,
  ): TypeReturn<Merge<TConfigs, TInlineOptions>>

  
  copy: Copy<TConfigs>


  raw?: TConfigs["raw"]
  formatted?: TConfigs["formatted"]
}

export interface Copy<TConfigs extends Configs> {
  <TCopyOptions extends CopyOptions>(options: TCopyOptions): Type<TConfigs & TCopyOptions>
}


export type TypeReturn<TConfigs extends Configs> = 
  TConfigs["strict"] extends true
    ? TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? true
        : true
      : TConfigs["optional"] extends true
        ? TConfigs["formatted"] | FallbackType<TConfigs>
        : TConfigs["formatted"]
    : TConfigs["boolean"] extends true
      ? TConfigs["optional"] extends true
        ? boolean
        : boolean
      : TConfigs["optional"] extends true
        ? INVALID | TConfigs["formatted"] | FallbackType<TConfigs>
        : INVALID | TConfigs["formatted"]

export type FallbackType<TConfigs extends Configs> = 
  TConfigs extends {fallback?: infer Fallback} 
    ? Fallback 
    : undefined


export function prepareOptions(options: RawBaseOptions = {}): PreparedBaseOptions {
  return {
    name: options.name || "UnknownType", 
    strict: options.strict ?? false, 
    boolean: options.boolean ?? false, 
    classes: options.classes ?? [ANY], 
    fallback: options.fallback, 
    optional: options.optional ?? false, 
    checkClass: options.checkClass ?? true,
  }
}

export function finalizeOptions(options: PreparedBaseOptions, rawInlineOptions: RawInlineOptions = {}): FinalOptions {
  const finalOptions: Partial<FinalOptions> = {...options, VALID, INVALID}

  
  if (rawInlineOptions.strict !== undefined) { 
    finalOptions.strict = rawInlineOptions.strict 
  }

  if (rawInlineOptions.key !== undefined) {
    finalOptions.key = rawInlineOptions.key
  }
  
  if (rawInlineOptions.boolean !== undefined) { 
    finalOptions.boolean = rawInlineOptions.boolean 
  }
  
  if (rawInlineOptions.optional !== undefined) { 
    finalOptions.optional = rawInlineOptions.optional 
  }
  
  if (rawInlineOptions.fallback !== undefined) { 
    finalOptions.fallback = rawInlineOptions.fallback 
  }
  

  return finalOptions as FinalOptions
}

export function invalidate(options: FinalOptions, rawValue: unknown, error: unknown) {
  if (options.boolean) {
    return options.optional && rawValue === undefined ? true : false
  }

  if (options.optional) {
    if (rawValue === undefined) {
      return options.fallback
    }
  }

  if (options.strict) {
    throw error
  }

  return INVALID
}

export function isClassOf(value: unknown, classNames: ClassName[]) {
  const classOfValue = classOf(value);

  for (let className of classNames) {
    if ((
      className === ANY
    ) || (
      className === classOfValue
    )) {
      return true
    }
  }

  return false
}

export function classOf(value: unknown) {
  return Object.prototype.toString.call(value).slice(8, -1)
}

export function Type<TConfigs extends Configs>(format: Format<TConfigs>, rawBaseOptions: RawBaseOptions<TConfigs>): Type<TConfigs> {
  const id = Symbol()
  const baseOptions = prepareOptions(rawBaseOptions)
  const {name, classes} = baseOptions


  function type(rawValue: unknown, inlineOptions?: RawInlineOptions) {
    const options = finalizeOptions(baseOptions, inlineOptions)


    try {
      if (options.checkClass) {
        if (!isClassOf(rawValue, classes)) {
          throw id
        }
      }

      if (format) {
        const formattedValue = format(rawValue as unknown, options)
  
        if (formattedValue === INVALID) {
          throw id
        }
  
        if (!options.boolean) {
          return formattedValue
        }
      }
    }

    catch (error) {
      if ((
        error === id
      ) || (
        error instanceof FormatError
      )) {
        return invalidate(options, rawValue, new FormatError({
          typeName: name,
          typeKey: options.key,
          invalidValue: error instanceof FormatError ? error.invalidValue : rawValue,
          childTypeName: error instanceof FormatError ? error.typePath : undefined,
        }))
      } 
      
      throw error
    }

    if (options.boolean) {
      return true;
    }


    return VALID
  }

  function copy(copyOptions: CopyOptions = {}) {
    return Type(format, {
      name: copyOptions.name ?? baseOptions.name, 
      strict: copyOptions.strict ?? baseOptions.strict, 
      boolean: copyOptions.boolean ?? baseOptions.boolean, 
      classes: copyOptions.classes ?? baseOptions.classes, 
      fallback: copyOptions.fallback ?? baseOptions.fallback, 
      optional: copyOptions.optional ?? baseOptions.optional, 
      checkClass: baseOptions.checkClass,
    })
  }


  type.copy = copy


  return type as Type<TConfigs>
}


export default Type