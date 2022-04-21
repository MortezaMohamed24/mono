import {INVALID} from "../../constants";
import CopyOptions from "./copyOptions";
import CopyConfigs from "./copyConfigs";
import ErrorCreator from "../../errorCreator";
import FactoryConfigs from "./factoryConfigs";
import FormatterReturnType from "./formatterReturnType";
import FormattingModifiers from "./formattingModifiers";


type FormatterWithConfigs<TConfigs extends FactoryConfigs> = {
  (value: any): FormatterReturnType<TConfigs>;

  <TModifiers extends FormattingModifiers>(
    value: any, 
    modifiers: TModifiers,
  ): FormatterReturnType<TConfigs & TModifiers>;

  (
    value: any, 
    overrriderModifiers?: FormattingModifiers,
  ): (
    | INVALID 
    | boolean 
    | TConfigs extends {fallback: infer Fallback} ? Fallback : undefined
    | TConfigs extends {formatted: infer Formatted} ? Formatted : never
  )


  copy<TCopyConfigs extends CopyConfigs>(
    options: CopyOptions<TCopyConfigs>,
  ): (
    FormatterWithConfigs<TConfigs & TCopyConfigs>
  );

  /** Fake property! Used by TypeScript only. */
  value: TConfigs["formatted"];
  error: ErrorCreator;
  typeName: string;
  toString(): string;
  checkTypeName(value: unknown): boolean;
}


export default FormatterWithConfigs;