import Configs from "./configs";
import ErrorCreator from "../../errorCreator";


type Options<TConfigs extends Configs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
}


export default Options