import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CheckitemDestroyActionConfig from "./config.js";


const DESTROY = ApiAction<CheckitemDestroyActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default DESTROY;