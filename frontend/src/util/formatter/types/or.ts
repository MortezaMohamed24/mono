import {Formatter} from "../formatter";
import FormatterFactory from "../formatter";


type Or = Formatter[];
type Options =  {name?: undefined | string}


const OR = <TOr extends Or>(or: TOr, {name}: Options = {}) => (
  FormatterFactory<unknown[], TOr[number]["value"]>((unformatted, {INVALID}) => {
    for (let formatter of or) {
      let formatted: unknown;

      try {
        formatted = formatter(unformatted, {strict: false});
      } catch (e) {
        formatted = INVALID;
      }

      if (formatted !== INVALID) {
        return formatted;
      }
    }
              
    throw null;
  }, {
    name: name || "Or",
  })
);


export default OR;