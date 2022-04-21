import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  strict?: boolean | undefined;
  boolean?: boolean | undefined;
  optional?: boolean | undefined;
  fallback?: unknown | undefined;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: string;
  error?: ErrorCreator;
}

function UNDEFINED<TConfigs extends Configs>(options?: Options<TConfigs>) {
  return formatterify<TConfigs, undefined, undefined>({
    name: "Undefined", 
    options: options, 
    typeNames: ["Undefined"],
  }, () => (
    undefined
  ));
}


export default UNDEFINED;