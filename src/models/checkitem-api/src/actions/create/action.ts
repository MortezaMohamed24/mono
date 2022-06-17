import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import CheckitemCreateActionConfig from "./config.js";


const CREATE = ApiAction<CheckitemCreateActionConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default CREATE;