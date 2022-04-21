import Config from "./config.js";
import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const DESTROY = ApiAction<Config>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default DESTROY;