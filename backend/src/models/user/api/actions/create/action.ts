import Config from "./config.js";
import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";


const CREATE = ApiAction<Config>({
  authorized: false,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default CREATE;