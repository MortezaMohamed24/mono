import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import ChecklistCreateRequestConfig from "./config.js";


const CREATE = ApiAction<ChecklistCreateRequestConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default CREATE;