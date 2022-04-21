import {INVALID} from "../../constants";


type FormattingCompleter<TFormatted, TUnformatted> = (
  value: TUnformatted, 
  formattingCompleterApi: FormattingCompleterApi,
) => TFormatted

type FormattingCompleterApi = {
  INVALID: INVALID;
}


export default FormattingCompleter;