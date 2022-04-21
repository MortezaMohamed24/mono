import ApiAction from "#models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import ChecklistDestroyRequestConfig from "./config.js";


const DESTROY = ApiAction<ChecklistDestroyRequestConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default DESTROY;