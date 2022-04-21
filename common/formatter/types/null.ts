import formatterify from "../formatterify";
import ErrorCreator from "../errorCreator";


type Configs = {
  strict?: boolean;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
}

type Options<TConfigs extends Configs> = TConfigs & {
  name?: string;
  error?: ErrorCreator;
} 

function NULL<TConfigs extends Configs>(options: Options<TConfigs> = {} as Options<TConfigs>) {
  return formatterify<TConfigs, null, null>({
    name: "Null", 
    options: options, 
    typeNames: ["Null"],
  },

  () => (
    null
  ));
}


export default NULL;