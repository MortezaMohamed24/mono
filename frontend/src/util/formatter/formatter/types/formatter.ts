import {INVALID} from "../../constants";
import CopyOptions from "./copyOptions";
import CopyConfigs from "./copyConfigs";
import ErrorCreator from "../../errorCreator";
import FactoryConfigs from "./factoryConfigs";
import FormattingModifiers from "./formattingModifiers";
import FormatterReturnType from "./formatterReturnType";


type Configs = {
  fallback: unknown;
  formatted: unknown;
  unformatted: unknown;
}


type Formatter = {
  (value: any): FormatterReturnType<FactoryConfigs>;

  <TModifiers extends FormattingModifiers>(
    value: any, 
    modifiers: TModifiers,
  ): FormatterReturnType<FactoryConfigs & TModifiers>;

  (
    value: any, 
    overrriderModifiers?: FormattingModifiers,
  ): (
    | INVALID 
    | boolean 
    | Configs extends {fallback: infer Fallback} ? Fallback : undefined
    | Configs extends {formatted: infer Formatted} ? Formatted : never
  )

  copy(options: CopyOptions<CopyConfigs>): Formatter;
  
  error: ErrorCreator;
  value: Configs["formatted"];
  typeName: string;
  toString(): string;
  checkTypeName(value: unknown): boolean;
}


export default Formatter;