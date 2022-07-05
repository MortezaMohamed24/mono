import Label from "src/models/label/Label";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface LabelDestroyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The label to destroy */
    label: Label;
  };
  authorized: true;
}


export default LabelDestroyActionConfig;