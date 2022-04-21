import CopyConfigs from "./copyConfigs";
import ErrorCreator from "../../errorCreator";


type CopyOptions<TConfigs extends CopyConfigs> = {
  name?: undefined | string;
  error?: undefined | ErrorCreator;
  strict?: TConfigs["strict"];
  boolean?: TConfigs["boolean"];
  optional?: TConfigs["optional"];
  fallback?: TConfigs["fallback"];
}


export default CopyOptions