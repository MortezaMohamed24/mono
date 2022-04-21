import Label from "#models/label";
import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";


interface LabelProjectActionConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The label to project */
    label: Label;
  };
  authorized: true;
}


export default LabelProjectActionConfig;