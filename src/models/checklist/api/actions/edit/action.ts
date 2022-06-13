import ApiAction from "src/models/util/apiAction";
import bodyCheckable from "./bodyCheckable.js";
import ChecklistEditRequestConfig from "./config.js";


const EDIT = ApiAction<ChecklistEditRequestConfig>({
  authorized: true,
  bodyCheckable: bodyCheckable,
  queryCheckable: undefined,
});


export default EDIT;