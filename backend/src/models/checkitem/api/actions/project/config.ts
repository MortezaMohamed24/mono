import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";
import Checkitem from "#models/checkitem";


interface CheckitemProjectActionConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The checkitem to project */
    checkitem: Checkitem;
  };
  authorized: true;
}


export default CheckitemProjectActionConfig;