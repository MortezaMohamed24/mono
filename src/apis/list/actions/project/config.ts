import List from "src/models/list/List";
import QueryType from "./queryType.js";
import ReturnType from "./returnType.js";


interface ListProjectActionConfig {
  body: undefined;
  query: QueryType;
  return: ReturnType;
  locals: {
    /** The list to project */
    list: List;
  };
  authorized: true;
}


export default ListProjectActionConfig;