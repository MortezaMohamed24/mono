import List from "src/models/list";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListDestroyActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list to destory */
    list: List;
  };
  authorized: true;
}


export default ListDestroyActionConfig;