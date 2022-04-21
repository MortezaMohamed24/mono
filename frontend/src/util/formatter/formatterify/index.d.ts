import {TypeName} from "../typeNameChecker";
import {FormattingCompleter} from "../formatter";
import {FormatterWithConfigs} from "../formatter";


type FormatterifyConfigs = {
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}

type Options<TConfigs extends FormatterifyConfigs> = {
  name?: undefined | string;
  typeNames?: undefined | TypeName[];

  options?: undefined | ({
    name?: undefined | string; 
    strict?: TConfigs["strict"];
    boolean?: TConfigs["boolean"];
    optional?: TConfigs["optional"];
    fallback?: TConfigs["fallback"];
    typeNames?: undefined | TypeName[];
  });
}

declare function formatterify<
  TConfigs extends FormatterifyConfigs, 
  TUnformatted extends unknown, 
  TFormatted extends unknown,
>(
  options: Options<TConfigs>,
  format: FormattingCompleter<TFormatted, TUnformatted>,
): (
  FormatterWithConfigs<
    & TConfigs
    & {formatted: TFormatted, unformatted: TUnformatted}
  >
)


export default formatterify;