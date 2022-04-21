import Label from "#models/label";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface LabelEditActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The label to edit */
    label: Label;
  };
  authorized: true;
}


export default LabelEditActionConfig;