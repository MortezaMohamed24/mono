import {INVALID} from "../../constants";


type FormattingCompleter<TFormatted, TUnformatted> = (
  value: TUnformatted, 
  formattingCompleterApi: FormattingCompleterApi,
) => TFormatted

type FormattingCompleterApi = {
  error(): unknown;
  INVALID: INVALID;
}


export default FormattingCompleter;