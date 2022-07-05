import Formatter from "../formatter";


type Options = {
  name?: undefined | string;
  which?: undefined | boolean | "any";
}

type ReturnType<TOptions extends Options> = 
  TOptions["which"] extends true
    ? true
    : TOptions["which"] extends false
      ? false
      : boolean

const BOOLEAN = <TOptions extends Options>({which}: TOptions = {} as TOptions) => (
  Formatter<boolean, ReturnType<TOptions>>((unformatted) => {
    if ((
      which === true && unformatted !== true
    ) || (
      which === false && unformatted !== false
    )) {
      throw null;
    } else {
      return unformatted as ReturnType<TOptions>;
    }
  }, {
    name: "Boolean",
    typeNames: ["Boolean"],
  })
)


export default BOOLEAN;