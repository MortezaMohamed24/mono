import ApiAction from "src/models/util/apiAction";
import queryCheckable from "./queryCheckable.js";
import ChecklistProjectRequestConfig from "./config.js";


const PROJECT = ApiAction<ChecklistProjectRequestConfig>({
  authorized: true,
  bodyCheckable: undefined,
  queryCheckable: queryCheckable,
});


export default PROJECT;