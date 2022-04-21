import {INVALID} from "../constants";
import {FormattingCompleter} from "../formatter";
import {FormatterWithConfigs} from "../formatter";


type Configs = {
  name?: undefined | string;
  strict?: undefined | boolean;
  options?: undefined | TOptions;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
  typeNames?: undefined | TypeNames;
}

type Options<TConfigs extends Configs> = {
  name?: undefined | string;
  options?: undefined | Configs["options"];
  typeNames?: undefined | TypeNames;
}

function formatterify<
  TConfigs extends Configs, 
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