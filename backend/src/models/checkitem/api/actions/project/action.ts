import Config from "./config.js";
import ApiAction from "#models/util/apiAction";
import QueryCheckable from "./queryCheckable.js";


const PROJECT = ApiAction<Config>({
  authorized: true,
  bodyCheckable: undefined,
  queryCheckable: QueryCheckable,
});


export default PROJECT;