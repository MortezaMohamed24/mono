import Config from "./config.js";
import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const SORT = ApiAction<Config>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default SORT;