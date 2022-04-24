import {INVALID} from "../../constants";


type FormattingCompleter<TFormatted, TUnformatted> = (
  value: TUnformatted, 
  formattingCompleterApi: FormattingCompleterApi,
) => TFormatted

type FormattingCompleterApi = {
  strict?: boolean;
  INVALID: INVALID;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
}


export default FormattingCompleter;