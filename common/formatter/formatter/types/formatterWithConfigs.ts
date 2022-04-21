import {O} from "ts-toolbelt";
import {INVALID} from "../../constants";
import CopyConfigs from "./copyConfigs";
import CopyOptions from "./copyOptions";
import FactoryConfigs from "./factoryConfigs";
import FormatterReturnType from "./formatterReturnType";
import FormattingModifiers from "./formattingModifiers";


type FormatterWithConfigs<TConfigs extends FactoryConfigs> = {
  (value: any): FormatterReturnType<TConfigs>;

  <TModifiers extends FormattingModifiers>(
    value: any, 
    modifiers: TModifiers,
  ): FormatterReturnType<O.Merge<TModifiers, TConfigs>>;

  (
    value: any, 
    overrriderModifiers?: FormattingModifiers,
  ): (
    | INVALID 
    | boolean 
    | TConfigs extends {fallback: infer Fallback} ? Fallback : never
    | TConfigs extends {formatted: infer Formatted} ? Formatted : never 
  )


  copy<TCopyConfigs extends CopyConfigs>(
    options: CopyOptions<TCopyConfigs>
  ): (
    FormatterWithConfigs<O.Merge<TCopyConfigs, TConfigs>>
  );

  /** Fake property! Used by TypeScript only. */
  value: TConfigs["formatted"];
  error(value: unknown): unknown;
  typeName: string;
  toString(): string;
  checkTypeName(value: unknown): boolean;
}


export default FormatterWithConfigs;