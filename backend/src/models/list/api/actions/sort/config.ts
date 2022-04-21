import List from "#models/list";
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