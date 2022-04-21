import {Formatter} from "../../formatter";


type Configs = {
  strict?: undefined | boolean;
  content?: undefined | Formatter[];
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}


export default Configs