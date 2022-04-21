import Configs from "./configs";
import {TypeName} from "../../typeNameChecker";
import ErrorCreator from "../../errorCreator";


type Options<TConfigs extends Configs> = TConfigs & {
  min?: undefined | number;
  max?: undefined | number;
  name?: undefined | string;
  error?: undefined | ErrorCreator;
  length?: undefined | number | "any";
  typeNames?: undefined | TypeName[];
}


export default Options