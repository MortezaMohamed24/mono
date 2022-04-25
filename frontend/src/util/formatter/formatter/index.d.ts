import {O} from "ts-toolbelt";
import {INVALID} from "../constants";
import {TypeName} from "../typeNameChecker";


export type FactoryOptions = {
  name?: undefined | string;
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
  typeNames?: undefined | TypeName[];
}

export type FormattingModifiers = {
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

export type CopyOptions<TModifiers extends FormattingModifiers> = TModifiers & {
  name?: string;
  typeNames?: TypeName[];
}

export interface Formatter<TValue = unknown, TModifiers extends FormattingModifiers = FormattingModifiers> {
  (value: unknown): ReturnType<this, TModifiers>

  <TOverriderModifiers extends FormattingModifiers>(value: unknown, modifiers: TOverriderModifiers): (
    ReturnType<this, TOverriderModifiers>
  )


  copy<TOverriderModifiers extends FormattingModifiers>(overriderOptions: CopyOptions<TOverriderModifiers>): (
    Formatter<TValue, O.Merge<TOverriderModifiers, TModifiers>>
  )

  
  /** Fake property! Used by TypeScript only. */
  readonly value: TValue;
  readonly typeName: string;
  readonly toString: () => string;
  readonly checkTypeName: (value: unknown) => boolean;
}


export type ReturnType<TType extends {value: unknown}, TModifiers extends FormattingModifiers> = 
  TModifiers["strict"] extends true
    ? TModifiers["boolean"] extends true
      ? TModifiers["optional"] extends true
        ? true
        : true
      : TModifiers["optional"] extends true
        ? TType["value"] | FallbackType<TModifiers>
        : TType["value"]
    : TModifiers["boolean"] extends true
      ? TModifiers["optional"] extends true
        ? boolean
        : boolean
      : TModifiers["optional"] extends true
        ? INVALID | TType["value"] | FallbackType<TModifiers>
        : INVALID | TType["value"]

export type FallbackType<TModifiers extends FormattingModifiers> = 
  TModifiers extends {fallback: infer Fallback} 
    ? Fallback 
    : undefined


export type FormattingCompleter<TUnformatted, TFormatted> = (
  value: TUnformatted, 
  second: FormattingCompleterSecondArgument,
) => TFormatted

export type FormattingCompleterSecondArgument = {
  readonly strict: boolean;
  readonly INVALID: INVALID;
  readonly boolean: boolean;
  readonly optional: boolean;
}


export declare function FormatterFactory<
  TUnformatted extends unknown = unknown, 
  TFormatted extends unknown = unknown,
  TOptions extends FactoryOptions = FactoryOptions, 
>(
  format: FormattingCompleter<TUnformatted, TFormatted>,
  options?: TOptions,
): Formatter<TFormatted, TOptions>;


export default FormatterFactory;