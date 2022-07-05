import List from "src/models/list/List";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListSortActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list to sort */
    list: List;
  };
  authorized: true;
}


export default ListSortActionConfig;