import {Formatter} from "../../formatter";


type Configs = {
  strict?: boolean;
  boolean?: boolean;
  content: Formatter[];
  optional?: boolean;
  fallback?: unknown;
}


export default Configs;