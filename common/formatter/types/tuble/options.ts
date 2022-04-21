import Configs from "./configs";
import {TypeName} from "../../typeNameChecker";


type Options<TConfigs extends Configs> = TConfigs & {
  name?: string;
  typeNames?: TypeName[];
}


export default Options;