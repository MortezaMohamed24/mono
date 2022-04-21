import {TypeName} from "../../typeNameChecker";
import ErrorCreator from "../../errorCreator";
import FactoryConfigs from "./factoryConfigs";
import FormattingCompleter from "./formattingCompleter";


type FactoryOptions<TConfigs extends FactoryConfigs> = {
  name: string;
  error: ErrorCreator;
  format: FormattingCompleter<TConfigs["formatted"], TConfigs["unformatted"]>;
  strict?: TConfigs["strict"];
  boolean?: TConfigs["boolean"];
  optional?: TConfigs["optional"];
  fallback?: TConfigs["fallback"];
  typeNames: TypeName[];
}


export default FactoryOptions;