import List from "#models/list";
import BodyType from "./bodyType.js";
import ReturnType from "./returnType.js";


interface ListDestroyAllOwnCardsActionConfig {
  body: BodyType;
  query: undefined;
  return: ReturnType;
  locals: {
    /** The list whose own cards to get destroyed */
    list: List;
  };
  authorized: true;
}


export default ListDestroyAllOwnCardsActionConfig;