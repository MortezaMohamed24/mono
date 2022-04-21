import CopyConfigs from "./copyConfigs";
import ErrorCreator from "../../errorCreator";


type CopyOptions<TConfigs extends CopyConfigs> = TConfigs & {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
}


export default CopyOptions