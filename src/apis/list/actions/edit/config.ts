import List from "src/models/list/List";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListEditActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list to edit */
    list: List;
  };
  authorized: true;
}


export default ListEditActionConfig;