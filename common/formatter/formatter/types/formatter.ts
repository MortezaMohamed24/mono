import {O} from "ts-toolbelt";
import {INVALID} from "../../constants";
import CopyOptions from "./copyOptions";
import CopyConfigs from "./copyConfigs";
import ErrorCreator from "../../errorCreator";
import FactoryConfigs from "./factoryConfigs";
import FormattingModifiers from "./formattingModifiers";
import FormatterReturnType from "./formatterReturnType";
import FormatterWithConfigs from "./formatterWithConfigs";


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
  ): FormatterReturnType<O.Merge<TModifiers, FactoryConfigs>>;

  (
    value: any, 
    overrriderModifiers?: FormattingModifiers,
  ): (
    | INVALID 
    | boolean 
    | Configs extends {fallback: infer Fallback} ? Fallback : never
    | Configs extends {formatted: infer Formatted} ? Formatted : never
  )

  copy<TCopyConfigs extends CopyConfigs>(
    options: CopyOptions<TCopyConfigs>,
  ): Formatter;

  error: ErrorCreator;
  value: Configs["formatted"];
  typeName: string;
  toString(): string;
  checkTypeName(value: unknown): boolean;
}


export default Formatter;