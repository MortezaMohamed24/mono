import {Formatter} from "../../formatter";


type Configs = {
  or: Formatter[];
  strict?: undefined | boolean;
  boolean?: undefined | boolean;
  optional?: undefined | boolean;
  fallback?: undefined | unknown;
}


export default Configs;