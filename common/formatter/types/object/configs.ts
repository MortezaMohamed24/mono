import {TypeName} from "../../typeNameChecker";
import {Formatter} from "../../formatter";
import ErrorCreator from "../../errorCreator";


export interface Configs {
  name?: string;
  error?: ErrorCreator;
  strict?: boolean;
  content?: Record<any, Formatter>;
  boolean?: boolean;
  optional?: boolean;
  fallback?: unknown;
  typeNames?: TypeName[];
}


export default Configs;