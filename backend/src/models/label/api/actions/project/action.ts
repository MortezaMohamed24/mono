import Config from "./config.js";
import ApiAction from "#models/util/apiAction";
import queryCheckable from "./queryCheckable.js";


const PROJECT = ApiAction<Config>({
  authorized: true,
  bodyCheckable: undefined,
  queryCheckable: queryCheckable,
});


export default PROJECT;